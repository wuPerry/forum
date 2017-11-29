// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="static/antd.min-2.13.10.css" />
                <link rel="stylesheet" href="static/header.css" />
                <style>{`body { margin: 0 } /* custom! */`}</style>
            </Head>
            <body className="page-content-wrapper">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}