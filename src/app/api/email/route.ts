import * as postmark from "postmark"

console.log('process.env.POSTMARK_API_KEY', process.env.POSTMARK_API_KEY)
const postmarkClient = process.env.POSTMARK_API_KEY ? new postmark.ServerClient(process.env.POSTMARK_API_KEY) : null

export async function POST(req: Request) {
    const {name, email: emailMessage, message} = await req.json()
    console.log({name, emailMessage, message})
    const msg = {
        To: 'bailey@bsegail.com', // Change to your recipient
        From: 'bailey@bsegail.com', // Change to your verified sender
        Subject: `New Message from ${name} ${emailMessage}`,
        TextBody: message,
        HtmlBody: `<p>Name: ${name}</p><p>Email: ${emailMessage}</p><p>${message}</p>`,
    }

    try {
        await postmarkClient?.sendEmail(msg)
        return Response.json(200)
    } catch (e) {
        console.error((e as any)?.response?.body)
        return Response.error()
    }
}
