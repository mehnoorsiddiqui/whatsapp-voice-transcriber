const { Client, MessagesController, MediaController } = require('whatsapp-cloud-apilib');
const fetch = require('node-fetch');
const token = process.env.WHATSAPP_ACCESS_TOKEN;

const client = new Client({
  timeout: 0,
  accessToken: token,
});
const messagesController = new MessagesController(client);

const sendMessage = async (from, text) => {

  const phoneNumberID = process.env.WHATSAPP_PHONE_NUMBER_ID;

  const body = {
    messagingProduct: 'whatsapp',
    to: from,
    type: "text",
    text: {
      body: text
    }
  };
  try {
    await messagesController.sendMessage(phoneNumberID, body);

  } catch (error) {
    throw error;
  }
}


const mediaController = new MediaController(client);

const downloadAudio = async (mediaID) => {
  try {
    const { result } = await mediaController.retrieveMediaURL(mediaID);
    const audioURL = result.url;
    const config = { headers: { authorization: `Bearer ${token}` } };
    const audioBinary = await fetch(audioURL, config);
    return audioBinary;

  } catch (error) {
    throw error;
  }
}


module.exports = { sendMessage, downloadAudio };
