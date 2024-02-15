const nodemailer = require("nodemailer");

// CONTACT
function sendEmail({
  recipient_email,
  name,
  email,
  subject,
  message,
  formName,
  fields,
}) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`,
      },
    });

    const mail_configs = {
      from: "ziltch1technologies@gmail.com",
      to: recipient_email,
      subject: subject,
      text: formName,
      html: `<body>
      <h2>${subject}</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${name}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${subject}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${message}</span></li><br/>
       </ul>
       </body>`,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "an error occured" });
      }
      return resolve({ message: "email sent successfully" });
    });
  });
}

module.exports = {
  sendEmail,
};
