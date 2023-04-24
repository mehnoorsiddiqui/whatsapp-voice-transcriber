const { downloadAudio } = require("./services/WhatsAppCloudService");
const createTranscription = require("./Services/OpenAIWhisperService");
const fs = require("fs").promises;
const os = require("os");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

ffmpeg.setFfmpegPath(ffmpegPath);

async function Transcription(audioID) {

  const downloadMedia = await downloadAudio(audioID);

  //Creat temporary directory and remove it after function execution.
  const tempDir = await fs.mkdtemp(path.join(await fs.realpath(os.tmpdir()), path.sep));
  try {
    // Convert the audio file from OGG to MP3 format
    const oggAudioPath = path.join(tempDir, "file");
    await fs.writeFile(oggAudioPath, await downloadMedia.buffer());
    const mp3AudioPath = path.join(tempDir, `${audioID}.mp3`);
    await transcodeAudio(oggAudioPath, mp3AudioPath, "mp3");

    // Transcribe the MP3 audio file 
    const text = await createTranscription(mp3AudioPath);
    return text;
  } catch (error) {
    throw error;
  }
  finally {
    await fs.rm(tempDir, { recursive: true });
  }
}

// Convert an audio file from one format to another
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
        resolve();
      })
      .save(outputPath);

  });
}


module.exports = Transcription;
