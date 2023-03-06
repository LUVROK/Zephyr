import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
  host: 'imap.yandex.ru',
  port: 993,
  secure: true,
  auth: {
    user: 'hello@zephyr.agency',
    pass: 'ckcsantyznabvnfw',
  },
  tls: { rejectUnauthorized: false },
}, {
  from: 'Zephyr Agency',
});

const sendEmail = (message: { to: string; subject: string; html: string; }): void => {
  // @ts-ignore
  smtpTransport.sendMail(message, (error, info): void => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent successfully', info);
    }
    smtpTransport.close();
  });
};

// eslint-disable-next-line import/no-default-export
export default sendEmail;
