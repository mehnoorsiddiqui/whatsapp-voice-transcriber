const { sendMessage} = require("./services/WhatsAppCloudService");
const Transcription = require("./Transcription");

async function receive(message) {
  try {
    const messageId = message.entry?.[0]?.changes?.[0].value.messages?.[0]?.id;
    const from = message.entry?.[0]?.changes?.[0].value.messages?.[0]?.from;
  
    if (!isAudioMessage(message) && !isReplyMessage(message)) {
      if (messageId) {
        await sendMessage(from, "Bot only supports audio messages");
      }
      return;
    } else {
      const audioID = message.entry[0]?.changes[0]?.value.messages[0]?.audio.id;
      await Transcription(from, audioID);
    }
  } catch (error) {
    console.log(error)
  }
 
}

function isAudioMessage(message) {
  return (
    message?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.type === "audio"
  );
}

function isReplyMessage(receivedMessage) {
  const message =
    receivedMessage?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  return (
    message?.type === "interactive" &&
    message?.interactive?.type === "button_reply"
  );
}

module.exports = receive;
