const sendGrid = require("@sendgrid/mail");

const { SENDGRID_KEY, BASE_URL, SEND_MAIL_FROM, SEND_MAIL_TO } = process.env;

sendGrid.setApiKey(SENDGRID_KEY);

const sendMail = (verificationToken) => {
  const letter = {
    from: SEND_MAIL_FROM,
    to: SEND_MAIL_TO,
    subject: "It's my sender!!! ;)",
    text: "and easy to do anywhere, even with Node.js",
    html: `<p>Hello! To verify your email go to <a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}>Please click here to verify your email</a>!</p>`,
  };

  sendGrid
    .send(letter)
    .then(() => console.log(`Verify message was sent to ${SEND_MAIL_TO}`))
    .catch((error) => console.log(error.message));
};

module.exports = sendMail;
