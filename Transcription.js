const {
  sendMessage_,
  downloadAudio_,
} = require("./services/WhatsAppCloudService");
const transcribeAudio = require("./services/OpenAIWhisperService");
const fs = require("fs").promises;
const os = require("os");
const path = require("path");

//Create and remove temporary directory for function execution.
const withTempFile = (fn) => withTempDir((dir) => fn(path.join(dir, "file")));

const withTempDir = async (fn) => {
  const tempDir = await fs.mkdtemp(
    path.join(await fs.realpath(os.tmpdir()), path.sep)
  );

  try {
    return await fn(tempDir);
  } finally {
    await fs.rm(tempDir, { recursive: true });
  }
};

async function Transcription(to, audioID) {
  const downloadMedia = await downloadAudio_(audioID);
  withTempFile(async (filePath) => {
    await fs.writeFile(filePath, await downloadMedia.buffer());
    const text = await transcribeAudio(filePath);
    await sendMessage_(to, text);
  });
}

module.exports = Transcription;
