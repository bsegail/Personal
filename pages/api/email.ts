import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export default async function email(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email: emailMessage, message } = req.body
    const msg = {
      to: 'me@bsegail.com', // Change to your recipient
      from: 'me@bsegail.com', // Change to your verified sender
      subject: `New Message from ${name} ${emailMessage}`,
      text: message,
      html: `<p>Name: ${name}</p><p>Email: ${emailMessage}</p><p>${message}</p>`,
    }

    try {
      await sgMail.send(msg)
      return res.status(200).send(200)
    } catch (e) {
      console.error(e)
      return res.status(500).send(500)
    }
  }
  return res.status(404).send(404)
}
