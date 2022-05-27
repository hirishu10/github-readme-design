import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Splash.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import $ from "jquery";
import "animate.css";
//
function Splash() {
  const [status, setStatus] = useState("...");

  useEffect(() => {
    $("#titleFlash").addClass("animate__animated animate__bounceIn");
    setTimeout(() => {
      setStatus("Loading...");
      $("#handWaving").addClass(
        "animate__animated animate__headShake animate__repeat-2 animate__slow"
      );

      //:: after 300ms
      setTimeout(() => {
        $("#handWaving").removeClass("animate__animated animate__headShake");
        $("#titleFlash").removeClass("animate__animated animate__bounceIn");
        setStatus("...");
      }, 1000);
    }, 300);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Loading...</title>
        <meta name="loading" content="From Github-Readme-Design" />
        <link rel="icon" href="/rishufavicon.ico" />
        <link rel="preload" as="image" href="/myLogo.svg" />
      </Head>
      <div className={styles.floatMessage}>
        {"Please help us to improve this for everyone need Thank You | "}
        <a
          className={styles.appLink}
          href="https://github-readme-design.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {` https://github-readme-design.vercel.app/`}
        </a>

        <span>
          <a
            className={styles.boxLink}
            href="https://github.com/hirishu10/github-readme-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size={"1x"}
              style={{
                marginLeft: 10,
                transition: "0.2s",
              }}
            />
          </a>
        </span>
      </div>
      {/*  */}
      <div className={styles.outerContainer}>
        <div className={styles.handTitle}>
          Hello There,{" "}
          <p className={styles.handWave} id={"handWaving"}>
            {`👋`}
          </p>
        </div>
        {/*  */}
        <div className={styles.titleContainer} id={"titleFlash"}>
          Github-Readme-Design
        </div>
        <div className={styles.statusDisplay}>{status}</div>
      </div>
      {/*  */}
      <div className={styles.outerContainerForFooter}>
        <div className={styles.containerForLogo}>
          <div className={styles.containerForLogoTitle}>from</div>

          <div className={styles.containerForLogoImage}>
            <Image
              src="/myLogo.svg"
              alt="Rishu Chowdhary"
              width={40}
              height={27}
              priority={true}
            />
            <span
              style={{
                fontSize: 18,
                color: "white",
              }}
            >
              Rishu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
