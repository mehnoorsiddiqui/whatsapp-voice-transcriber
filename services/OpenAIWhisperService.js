const fs = require('fs');
const { ApiController,ApiError,Client,FileWrapper} = require('openai-whisper-apilib');
const fspromise = require("fs/promises");
const unlink = fspromise.unlink;

const client = new Client({
  timeout: 0,
});
const apiController = new ApiController(client);
const task = 'transcribe';
const language = 'en';

const transcribeAudio_= async(audioFilePath)=>{
    const audioFile = new FileWrapper(fs.createReadStream(`./${audioFilePath}`));
    try {
        const { result, ...httpResponse } = await apiController.transcribeFileAsrPost(audioFile, task, language);        
        await deleteFile(audioFilePath);
        return result.text;
      } catch(error) {
        console.log(error)
        await deleteFile(audioFilePath);
        if (error instanceof ApiError) {
          const errors = error.result;
          // const { statusCode, headers } = error;
        }
      }
}

async function deleteFile(filePath) {
  try {
    await unlink(filePath);
    console.log(`Successfully deleted ${filePath}`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = transcribeAudio_;
