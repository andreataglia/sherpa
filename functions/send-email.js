// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  sgMail.setApiKey(
    process.env.TWILIO_API_KEY
  );
  let date = new Date().toDateString;
  const msg = {
    to: 'hello@welcometosicily.app',
    from: 'shop@ilbuongustoitaliano.com',
    subject: 'WelcomeToSicily - New Team',
    html: `Ha creato team alle ${date} 
    <br>su <strong>${event.queryStringParameters.chosenApp}</strong> 
    <br>con numero/user: <strong>${event.queryStringParameters.lead}</strong>
    <br>con team: <strong>${event.queryStringParameters.team}</strong>
    <br>proveniente da <strong>${event.queryStringParameters.ref}</strong>`,
  };

//   callback(null, {
//     statusCode: 200,
//     body: 'sent',
//   });

  sgMail
    .send(msg)
    .then(() => {
      console.log('Message sent');
      callback(null, {
        statusCode: 200,
        body: 'sent',
      });
    })
    .catch((error) => {
      console.log(error.response.body);
      callback(null, {
        statusCode: 500,
        body: error,
      });
    });
};
