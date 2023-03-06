import { VercelRequest, VercelResponse } from '@vercel/node';
import sendEmail from '../../lib/main';

// eslint-disable-next-line import/no-default-export,@typescript-eslint/explicit-function-return-type,require-await
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  const message = {
    to: 'hello@zephyr.agency',
    subject: 'New customer!',
    html: `
         <h5>Интересует</h5>
         <p>${body.interested}</p>
         <h5>О себе</h5>
         <p>Имя: ${body.firstName}</p>
         <p>Фамилия: ${body.lastName}</p>
         <p>E-mail: ${body.email}</p>
         <p>Компания: ${body.company}</p>
         <h5>О проекте</h5>
         <p>${body.yourProject}</p>
         <h5>Бюджет</h5>
         <p>${body.budgetValue}</p>
        `,
  };
  sendEmail(message);
  res.send('Спасибо за заявку!');
}
