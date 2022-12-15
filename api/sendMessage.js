const {ApiError,Client,MessagesController} = require('whatsapp-cloud-apilib');
  
const client = new Client({
    timeout: 0,
    accessToken: 'EAAJy52XhSk0BADtgSvo6Wmbeb6uBV8ZC32AnKrRXZCGu9TghVeUtZAnRccPt4tg7FviQk9uReYJwJljs38sCsvtD6ZBHAZCTZCbLVKp8eLQmAWaoLoOUruuDqvKMHsVbN9LcZCSN5gZB1ksvwfx0LgAKeoRLnJZCmASNACjadZAQJ4ZA4V3SCC4mgpU',
});
  const messagesController = new MessagesController(client);
  const phoneNumberID = '103427805730484';
  const contentType = null;
  const body = {
    messagingProduct: 'whatsapp',
    to: '923142042740',
    type: "text",
    text: {
        body: "mehnoor"      
      }
  };

const sendMessage_ = async()=> {
    try {
        const { result, ...httpResponse } = await messagesController.sendMessage(phoneNumberID, body);
        // Get more response info...
        const { statusCode, headers } = httpResponse;
        console.log(result);
        console.log(statusCode,"statusCode");
      } catch(error) {
        if (error instanceof ApiError) {
          const errors = error.result;
          // const { statusCode, headers } = error;
        }
      }
}
sendMessage_();