const { sendMessage, downloadAudio } = require("./services/WhatsAppCloudService");
const createTranscription = require("./services/OpenAIWhisperService");
const fs = require("fs").promises;
const os = require("os");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

ffmpeg.setFfmpegPath(ffmpegPath);

async function Transcription(to, audioID) {

  const downloadMedia = await downloadAudio(audioID);

  //Creat temporary directory and remove it after function execution.
  const tempDir = await fs.mkdtemp(path.join(await fs.realpath(os.tmpdir()), path.sep));
  try {
    const orginalAudioPath = path.join(tempDir, "file");
    await fs.writeFile(orginalAudioPath, await downloadMedia.buffer());
    const audioName = audioID + ".mp3";
    const transcodedAudioPath = path.join(tempDir, audioName);
    await transcodeAudio(orginalAudioPath, transcodedAudioPath, "mp3");
    const text = await createTranscription(transcodedAudioPath);
    await sendMessage(to, text);
  } catch (error) {
    throw error;
  }
  finally {
    await fs.rm(tempDir, { recursive: true });
  }
}

//convert the audio from ogg format to mp3
async function transcodeAudio(inputPath, outputPath, format) {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(inputPath)
      .outputFormat(format)

      .on("error", (error) => {
        console.error(`FFmpeg error: ${error.message}`);
        reject(error);
      })

      .on("end", () => {
        console.log("Conversion succeeded!");
        resolve();
      })
      .save(outputPath);

  });
}


module.exports = Transcription;
