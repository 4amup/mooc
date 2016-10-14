var _ = require('loadsh');
var nodemailer = require('nodemailer');

var config = {
  host: 'smtp.163.com',
  prot: 25,
  auth: {
    user: 'lixiaochun0129@163.com',
    pass: 'wzz830703'
  }
};

var transporter = nodemailer.createTransport(config.smtp);

var defaultMail = {
  form: '天码营 <' + config.smtp.auth.user + '>',
  subject: 'test',
  to: 'lixiaochun0129@163.com',
  text: 'test text and html',
  html: '<b>test html </b>'
};

function sendMail(mail) {
  mail = _.merge({}, defaultMail, mail);

  transporter.sendMail(mail, function(error, info) {
    if(error) return console.log('mail sent error:', config, mail, error);
    console.log('Message sent:' + info.response);
  });
}

module.exports = {
  send: sendMail
}