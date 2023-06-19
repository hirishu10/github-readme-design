/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

type FooterConfig = {
  fromFlag?: boolean;
};

function Footer({ fromFlag }: FooterConfig) {
  return (
    <footer className={styles.footerMainContainer}>
      <div
        className={styles.footer}
        style={{
          padding: fromFlag ? "0.5rem" : "2rem",
        }}
      >
        <a
          href="https://instantmarkdown.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsored by{" "}
          <span className={styles.logo}>
            <Image
              src="/instantMarkdown.png"
              alt="Instant Markdown Previewer Logo"
              width={150}
              height={20}
            />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://rishuchowdhary.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desinged by Rishu Chowdhary{" "}
          <span className={styles.logo}>
            <Image
              src="/rishufavicon.ico"
              alt="Rishu Chowdhary"
              width={30}
              height={30}
            />
          </span>
        </a>
      </div>
      {/*  */}
      {fromFlag ? (
        <div className={styles.containerForLogo}>
          <div className={styles.containerForLogoTitle}>from</div>
          <div className={styles.containerForLogoImage}>
            <Image
              src="/footerLogo/myLogo.svg"
              alt="Rishu Chowdhary"
              width={40}
              height={27}
              priority={true}
            />
            <span
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              Rishu
            </span>
          </div>
        </div>
      ) : null}
    </footer>
  );
}

export default Footer;
