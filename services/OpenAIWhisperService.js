const fs = require('fs');
const { ApiController,ApiError,Client,FileWrapper} = require('openai-whisper-apilib');

const client = new Client({
  timeout: 0,
});
const apiController = new ApiController(client);
const task = 'transcribe';
const language = 'en';

const transcribeAudio= async(audioFilePath)=>{
    const audioFile = new FileWrapper(fs.createReadStream(audioFilePath));
    try {     
        const { result, ...httpResponse } = await apiController.transcribeFileAsrPost(audioFile, task, language);                       
        return result.text;
      } catch(error) {
        console.log(error)    
        if (error instanceof ApiError) {
          const errors = error.result;
          // const { statusCode, headers } = error;
        }
      }
}
module.exports = transcribeAudio;
