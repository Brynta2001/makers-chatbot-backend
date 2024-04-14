# Makers Tech ChatBot API

An API built with NestJS for the Makers Tech ChatBot project which connects to OpenAI Assistant API in order to create an assistant that gives the user information about an inventory defined in a CSV file. The assistant has the ability to give details about all items, a specific items, recommend items based on a user's preferences and so on.

## Requirements

- Node.js v20.0.0 or higher
- OpenAI Assistant API key

## Installation

1. Clone the repository
2. Install dependencies

    ```bash
    yarn install
    ```

3. Copy the `.env.template` file to `.env` and fill in the required environment variables.
4. Run the app with the following command:

    ```bash
    yarn start
    ```

5. The app should now be running on `http://localhost:3000`

## Usage

When the app is running, you can access the API assistant using the endpoint `http://localhost:3000/assistant` in your frontend application or using a .

## API Endpoints

The API has the following endpoints:

- `POST /assistant/create-thread` - Creates a new thread with the assistant. This endpoint does not require any request body.
- `POST /assistant/user-question` - Sends a question from the user to the assistant and gets a response. This endpoint requires the `threadId` and `question` in the request body.

## Observations

- The assistant is stateful and requires a thread to be created before sending questions.
- The assistant is able to give information about all items, a specific item, recommend items based on a user's preferences and so on.
- You can find the OpenAI Assistant API documentation [here](https://platform.openai.com/docs/overview).
- In order to use the OpenAI Assistant API, you need to create an account and get an API key.
- The project has committ linting using Husky, so make sure to follow the conventional commit message format. You can find more information about it [here](https://www.conventionalcommits.org/en/v1.0.0/).

## Author and acknowledgment

- The code was developed by [Bryan Tapia](https://github.com/Brynta2001) using the NestJS framework and the OpenAI Assistant API. Additionally, the project was developed as part of the Makers Tech ChatBot project using the Fernando Herrera's [OpenAI course](https://cursos.devtalles.com/courses/openai).

## License

Copyright (c) 2023 Bryan Tapia. This project is [MIT licensed](LICENSE).
