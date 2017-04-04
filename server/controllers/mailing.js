const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth {
        user: 'MitoNavigatorMailer@gmail.com'
        pass: 'ThePasswordThatGuardsMitoCanadasNavigator'
    }
});

let mailOptions = {
    from: '"MitoCanada" <MitoNavigatorMailer@gmail.com>',
    to: 'MatthewYaworski@gmail.com',
    subject: 'Email Confirmation',
    text: 'If you have created an account with MitoCanada, please click the link below.' +
    'Otherwise you may ignore/delete this email.'
    html: '<b> Hello! </b>'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Messages %s sent %s', info.messageId, info.response)
} 