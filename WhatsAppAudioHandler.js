const { sendMessage } = require("./services/WhatsAppCloudService");
const Transcription = require("./Transcription");

async function handleAudioMessage(message) {
  try {
    const MAX_MESSAGE_AGE_MINUTES = 12;

    //Ignore ibound notifications / messages  older than 12 min
    const recentMessages = message?.entry[0]?.changes[0]?.value?.messages?.filter(
      message => message.timestamp > (Date.now() - 1000 * 60 * MAX_MESSAGE_AGE_MINUTES) / 1000
    );

    const msg = recentMessages?.[0];

    if (!msg) {
      return;
    }
    const from = msg.from;

    if (!isAudioMessage(msg)) {
      await sendMessage(from, "Bot only supports audio messages");
      return;
    }
    const audioID = msg.audio.id;
    await Transcription(from, audioID);

  } catch (error) {
    console.log(error)
  }

}

function isAudioMessage(message) {
  return (
    message?.type === "audio"
  );
}
module.exports = handleAudioMessage;
