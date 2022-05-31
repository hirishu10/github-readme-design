import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/rishufavicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*  */}
        <meta name="dashboard" content="home" />
        {/* <meta
          name="dashboard"
          content="Hi I am Rishu Chowdhary Software Developer"
        /> */}
        {/*  */}
      </body>
    </Html>
  );
}
