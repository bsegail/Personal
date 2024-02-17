import * as postmark from "postmark"
import { NextApiRequest, NextApiResponse } from 'next'

console.log('process.env.POSTMARK_API_KEY', process.env.POSTMARK_API_KEY)
const postmarkClient = process.env.POSTMARK_API_KEY ? new postmark.ServerClient(process.env.POSTMARK_API_KEY) : null

export default async function email(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email: emailMessage, message } = req.body
    const msg = {
      To: 'bailey@bsegail.com', // Change to your recipient
      From: 'bailey@bsegail.com', // Change to your verified sender
      Subject: `New Message from ${name} ${emailMessage}`,
      TextBody: message,
      HtmlBody: `<p>Name: ${name}</p><p>Email: ${emailMessage}</p><p>${message}</p>`,
    }

    try {
      await postmarkClient?.sendEmail(msg)
      return res.status(200).send(200)
    } catch (e) {
      console.error((e as any)?.response?.body)
      return res.status(500).send(500)
    }
  }
  return res.status(404).send(404)
}
