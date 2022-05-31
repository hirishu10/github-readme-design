/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/HeadStart.module.scss";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { logEvent } from "@firebase/analytics";
import { analytics } from "../firebase";
import $ from "jquery";
import "animate.css";
//
const HeadStart: NextPage = (data) => {
  const [getStatus, setStatus] = useState("👨🏻‍💻 Setting up please wait..... ⚡️");

  const eachBanner = [
    {
      title: "Light Banner",
      imageLook: "/banner/headLight.svg",
      link: "https://github-readme-design.vercel.app/api/getHeadLight",
    },
    {
      title: "Dark Banner",
      imageLook: "/banner/headDark.svg",
      link: "https://github-readme-design.vercel.app/api/getHeadDark",
    },
  ];

  //:::::: Small but helpfull Layout for holding each banner ::
  /**
   *
   * @param tag Key for the Banner
   * @param title Title for the Banner
   * @param image Image for the Banner Look
   * @param link Link to visit after URL Coppied
   * @returns The Layout which helps to display the banner
   */
  const BannerHolder = (
    tag: React.Key,
    title: string,
    image: string,
    link: string
  ) => {
    return (
      <div key={tag}>
        <span style={{ paddingLeft: 20 }}>{title ? title : "Title"}</span>
        <div className={styles.bannerContainer}>
          <Image
            src={image ? image : "/banner/headLight.svg"}
            width={1280}
            height={200}
            priority={true}
          />
          <button
            id={`copyButton${tag}`}
            className={styles.copyButton}
            onClick={(e) => {
              e.preventDefault();
              // Clipboard API:-
              navigator.clipboard
                .writeText(
                  link
                    ? link
                    : "https://github.com/hirishu10/github-readme-design"
                )
                .then((v) => {
                  // ************* Some style for clicking the button ******************
                  //  Using J-Query and Animate.css
                  setStatus("URL Coppied Successfully");
                  $(`#copyButton${tag}`).addClass(
                    "animate__animated animate__bounceIn"
                  );
                  setTimeout(() => {
                    setStatus("...");
                    $(`#copyButton${tag}`).removeClass(
                      "animate__animated animate__bounceIn"
                    );
                  }, 800);
                  // ************* Some style for clicking the button ******************
                })
                .catch((err) => {
                  console.log("err", err);
                });
            }}
          >
            Copy URL
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    logEvent(analytics, "screen_view");
    setTimeout(() => {
      setStatus("...");
    }, 500);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Head-Start</title>
        <meta name="Head-Start" content="From Github-Readme-Design" />
        <link rel="icon" href="/rishufavicon.ico" />
      </Head>
      <Navbar title={"Head Start Banner"} />
      <main className={styles.outerContainer}>
        {/* {BannerHolder()} */}
        {/*  */}
        <div className={styles.designBackground}>
          {/* background below */}
          <span
            style={{
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            {getStatus}
          </span>
          {eachBanner.map((item, index) =>
            BannerHolder(index, item?.title, item?.imageLook, item?.link)
          )}
        </div>
        <div className={styles.helpus}>
          Please help us to improve this for everyone need Thank You!
          <a
            className={styles.projectButton}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HeadStart;
