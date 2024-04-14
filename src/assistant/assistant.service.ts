import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

import OpenAI from 'openai';
import { instructions } from './utils/instructions';
import {
  checkCompleteStatusUseCase,
  createMessageUseCase,
  createRunUseCase,
  createThreadUseCase,
  getMessageListUseCase,
} from './use-cases';

@Injectable()
export class AssistantService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  private assistant;

  constructor() {
    (async () => {
      this.assistant = await this.createAssistant();
    })();
  }

  async createAssistant() {
    const file = await this.openai.files.create({
      file: fs.createReadStream(
        path.join(__dirname, '../../dataset_inventory.csv'),
        'utf8',
      ),
      purpose: 'assistants',
    });

    const assistant = this.openai.beta.assistants.create({
      name: 'Makers Tech Assistant',
      instructions: instructions,
      model: 'gpt-3.5-turbo-1106',
      tools: [{ type: 'code_interpreter' }],
      file_ids: [file.id],
    });

    return assistant;
  }

  async createThread() {
    return await createThreadUseCase(this.openai);
  }

  async userQuestion(questionDto: any) {
    const { threadId, question } = questionDto;

    await createMessageUseCase(this.openai, {
      threadId,
      question,
    });

    const run = await createRunUseCase(this.openai, {
      threadId,
      assistantId: this.assistant.id,
    });

    await checkCompleteStatusUseCase(this.openai, {
      runId: run.id,
      threadId: threadId,
    });

    const messages = await getMessageListUseCase(this.openai, { threadId });

    return messages;
  }
}
