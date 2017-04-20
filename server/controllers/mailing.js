/*
let domain = 'mitonavigtor.org'
let apiKeyT = (process.env.apiKey || config.apiKey);
let mg = new mailgun(apiKey);
const mailgun = require("mailgun-js")({ apiKey: apiKeyT, domain: domain });

const mailcomposer = require("mailcomposer")

let mail = mailcomposer({
  from: 'MitoNavigatorMailer@gmail.com',
  to: 'MatthewYaworski@gmail.com',
  subject: 'Test email subject',
  text: 'Test email text',
  html: '<b> Test email text </b>'
});
 
mail.build(function(mailBuildError, message) {
 
    let dataToSend = {
        to: 'MatthewYaworski@gmail.com',
        message: message.toString('ascii')
    };
 
    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
        if (sendError) {
            console.log(sendError);
            return;
        }
    });
});

let filepath = '/path/to/message.mime';
  
let data = {
  to: fixture.message.to,
  message: filepath
};
 
mailgun.messages().sendMime(data, function (err, body) {
  console.log(body);
});

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Composer
///////////////////////////////////////////////
//var mail = mailcomposer({from: '...', ...});
// let stream = mail.createReadStream();
// stream.pipe(process.stdout);
/////////////////////////////////////////
//var mail = mailcomposer({from: '...', ...});
// mail.build(function(err, message){
//     process.stdout.write(message);
// });
////////////////////////////////////////////////
// var mailOptions = {
//     ...
//     html: '<b>Hello world!</b>',
//     alternatives: [
//         {
//             contentType: 'text/x-web-markdown',
//             content: '**Hello world!**'
//         }
//     ]
// }
////////////////////////////////////////////////
// var mailOptions = {
//     ...
//     attachments: [
//         {   // utf-8 string as an attachment 
//             filename: 'text1.txt',
//             content: 'hello world!'
//         },
//         {   // binary buffer as an attachment 
//             filename: 'text2.txt',
//             content: new Buffer('hello world!','utf-8')
//         },
//         {   // file on disk as an attachment 
//             filename: 'text3.txt',
//             path: '/path/to/file.txt' // stream this file 
//         },
//         {   // filename and content type is derived from path 
//             path: '/path/to/file.txt'
//         },
//         {   // stream as an attachment 
//             filename: 'text4.txt',
//             content: fs.createReadStream('file.txt')
//         },
//         {   // define custom content type for the attachment 
//             filename: 'text.bin',
//             content: 'hello world!',
//             contentType: 'text/plain'
//         },
//         {   // use URL as an attachment 
//             filename: 'license.txt',
//             path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
//         },
//         {   // encoded string as an attachment 
//             filename: 'text1.txt',
//             content: 'aGVsbG8gd29ybGQh',
//             encoding: 'base64'
//         },
//         {   // data uri as an attachment 
//             path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
//         }
//     ]
// }
//////////////////////////////////////////////////
// mailOptions = {
//     ...,
//     from: 'mailer@kreata.ee',
//     to: 'daemon@kreata.ee',
//     envelope: {
//         from: 'Daemon <deamon@kreata.ee>',
//         to: 'mailer@kreata.ee, Mailer <mailer2@kreata.ee>'
//     }
// }
// /////////////////////////////////////////////////
// var mailOptions = {
//     ...
//     html: 'Embedded image: <img src="cid:unique@kreata.ee"/>',
//     attachments: [{
//         filename: 'image.png',
//         path: '/path/to/file',
//         cid: 'unique@kreata.ee' //same cid value as in the html img src 
//     }]
// }
///////////////////////////////////////////////////////////////////


// sendText(
//     sender,
//     recipients,
//     subject,
//     text,
//     [servername = ''],
//     [options = {}],
//     [callback(err)]
// )

// sendText('sender@example.com',
//     ['recipient1@example.com', 'http://example.com/recipient2'],
//     'Behold the wonderous power of email!',
//     { 'X-Campaign-Id': 'something' },
//     function (err) { err && console.log(err) });
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'MitoNavigatorMailer@gmail.com',
//         pass: 'ThePasswordThatGuardsMitoCanadasNavigator'
//     }
// });

// let mailOptions = {
//     from: '"MitoCanada" <MitoNavigatorMailer@gmail.com>',
//     to: 'MatthewYaworski@gmail.com',
//     subject: 'Email Confirmation',
//     text: 'If you have created an account with MitoCanada, please click the link below.' +
//     'Otherwise you may ignore/delete this email.',
//     html: '<b> Hello! </b>'
// }

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Messages %s sent %s', info.messageId, info.response)
// } 