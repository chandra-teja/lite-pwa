import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <link
          href="/Images/L-icon-64.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link rel="apple-touch-icon" href="/Images/icons8-l-48.png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/Images/icons8-l-.png" sizes="48x48" />
        
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-title" content="Licious Lite"></meta>
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

