const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.get('/', function (req, res) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+15126437616',
      to: '+2348061184750'
    })
    .then(message => res.status(status).send("success: ", message.sid));
})
 
app.listen(3000)

// console.log('please work')

