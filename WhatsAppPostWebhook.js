const { sendMessage_ } = require("./services/WhatsAppCloudService");
const Transcription = require("./Transcription");

async function receive(notificationPayload) {
  for (const entry of notificationPayload.entry) {
    for (const change of entry.changes) {
      for (const message of change.value.messages) {
        const messageId = message.id;
        const from = message.from;

        if (!isAudioMessage(message) && !isReplyMessage(message)) {
          if (messageId) {
            await sendMessage_(from, "Bot only supports audio messages");
          }
          return;
        } else {
          const audioID = message.audio.id;
          await Transcription(from, audioID);
        }
      }
    }
  }
}

function isAudioMessage(message) {
  return message.type === "audio";
}

function isReplyMessage(message) {
  return (
    message.type === "interactive" &&
    message.interactive?.type === "button_reply"
  );
}

module.exports = receive;
