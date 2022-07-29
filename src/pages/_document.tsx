import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html dir="rtl">
            <Head title="فروشگاه کتاب" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}