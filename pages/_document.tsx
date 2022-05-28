import { Html, Head, Main, NextScript, default as NextDocument } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document