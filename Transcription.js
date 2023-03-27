const {
  sendMessage_,
  downloadAudio_,
} = require("./services/WhatsAppCloudService");
const transcribeAudio = require("./services/OpenAIWhisperService");
const path = require("path");
const fs = require("fs/promises");
const writeFile = fs.writeFile;

async function Transcription(to, audioID) {
  const downloadMedia = await downloadAudio_(audioID);
  const fileBasePath = "./tmp";
  const filePath = path.join(fileBasePath, `./${audioID}.ogg`);
  await writeFile(filePath, await downloadMedia.buffer());
  const text = await transcribeAudio(filePath);
  await sendMessage_(to, text);
}

module.exports = Transcription;
