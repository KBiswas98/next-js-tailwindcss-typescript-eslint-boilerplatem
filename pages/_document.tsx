import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-GB">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; cahrset=utf-8"
                    />
                    <meta
                        name="ahrefs-site-verification"
                        content="5f03d169f9c8a4414e2382b0096d1462ef6f3ee310d6a2c3e7ecf2a3607f0317"
                    ></meta>
                    <meta name="theme-color" content="#673ab7" />
                    <meta title="Enzeo: Online Shopping- Buy Runway-Inspired Designs" />
                    <meta
                        name="Description"
                        content="Online shopping site for fast fashion in India. Buy dresses, co-ords, trousers and much more at best discounts. Free shipping on orders above 999"
                    />

                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="img/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="apple-touch-icon"
                        href="img/apple-touch-icon-152x152.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
