const nodemailer = require('nodemailer');

const logger = require('./logger');

function email(from, to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from,
    to,
    subject,
    text: text.toString(),
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      logger.error(`Error: ${err}`);
    } else {
      logger.info(`Email sent successfully: ${data.messageId} | from: ${ from } | to: ${ to }`);
    }
  });
}

module.exports = {
  email,
}