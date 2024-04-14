import { Module } from '@nestjs/common';
import { AssistantModule } from './assistant/assistant.module';

@Module({
  imports: [AssistantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
