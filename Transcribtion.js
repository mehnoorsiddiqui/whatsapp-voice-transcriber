const {sendMessage_,downloadAudio_} = require("./services/WhatsAppCloudService");
const transcribeAudio_ = require("./services/OpenAIWhisperService");
const path = require("path");
const fs = require("fs/promises");
const writeFile = fs.writeFile;


async function Transcribtion(to, audioID) {

    const downloadMedia = await downloadAudio_(audioID);
    const fileBasePath = "./tmp";
    // const filePath = path.join(__dirname, fileBasePath, `./${audioID}.ogg`);
    const filePath = path.join(fileBasePath, `./${audioID}.ogg`);
    await writeFile(filePath, await downloadMedia.buffer());
    //const text = await transcribeAudio_(`${fileBasePath}/${audioID}.ogg`);
    const text = await transcribeAudio_(filePath);
    console.log(text);
    const sendMessage = await sendMessage_(to,text);
}



module.exports = Transcribtion;