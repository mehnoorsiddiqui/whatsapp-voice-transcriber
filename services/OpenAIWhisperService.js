const fs = require("fs");
const { Client, OpenAIController, FileWrapper } = require("openai-apilib");

// Create OpenAI configuration
const client = new Client({
  timeout: 0,
  accessToken: process.env.OPENAI_API_KEY
});

// Create OpenAI API client
const openAIController = new OpenAIController(client);

//translate and transcribe audio into English
const createTranscription = async audioFilePath => {
  const file = new FileWrapper(fs.createReadStream(audioFilePath));
  const model = "whisper-1";
  try {
    const { result } = await openAIController.createTranslation(file, model);
    return result.text;
  } catch (error) {
    throw error;
  }
};

module.exports = createTranscription;
