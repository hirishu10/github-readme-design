import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap"
        // href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
        {/*  */}
        <meta name="dashboard" content="home" />
        <meta
          name="dashboard"
          content="Hi I am Rishu Chowdhary Software Developer"
        />
        <link rel="icon" href="/rishufavicon.ico" />
        {/*  */}
      </body>
    </Html>
  );
}
