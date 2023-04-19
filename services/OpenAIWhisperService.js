const fs = require("fs");
const { Client, OpenAIController, FileWrapper } = require("openai-apilib");

// Create OpenAI configuration
const client = new Client({
  timeout: 0,
  accessToken: process.env.OPENAI_API_KEY
});

// Create OpenAI API client
const openAIController = new OpenAIController(client);

const createTranscription = async (audioFilePath) => {
  const file = new FileWrapper(fs.createReadStream(audioFilePath));
  const model = "whisper-1";
  const prompt = "English Language";
  const responseFormat = "json";
  const temperature = 0;
  const language = "en"
  try {
    const { result } = await openAIController.createTranscription(file, model, prompt, responseFormat, temperature, language);
    return result.text;
  } catch (error) {
    throw error;
  }
};

module.exports = createTranscription;
