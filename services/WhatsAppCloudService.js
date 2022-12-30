const {ApiError,Client,MessagesController,MediaController} = require('whatsapp-cloud-apilib');
const fetch = require('node-fetch');
const token = process.env.WHATSAPP_TOKEN;
  
const client = new Client({
    timeout: 0,
    accessToken: process.env.WHATSAPP_TOKEN,
});
const messagesController = new MessagesController(client);

const sendMessage_ = async(from,text)=> {
    let from_= from.toString();
    let phoneNumberID_ = process.env.PHONE_NUMBER_ID;
    let text_= text.toString();

    const body = {
        messagingProduct: 'whatsapp',
        to: from_,
        type: "text",
        text: {
            body: text_     
          }
      };
    try {
        const { result, ...httpResponse } = await messagesController.sendMessage(phoneNumberID_, body);
        return result;
      } catch(error) {
        console.log(error)
        if (error instanceof ApiError) {
          const errors = error.result;
          // const { statusCode, headers } = error;
        }
      }
}


const mediaController = new MediaController(client);

const downloadAudio_= async(mediaID) => {
  try {
  const { result, ...httpResponse } = await mediaController.retrieveMediaURL(mediaID);
  const audioURL = result.url;
  const config = { headers: { authorization: `Bearer ${token}` } };
  const audioBinary = await fetch(audioURL, config);
  return audioBinary;
  
} catch(error) {
  console.log(error)
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}}


module.exports = {sendMessage_,downloadAudio_};
