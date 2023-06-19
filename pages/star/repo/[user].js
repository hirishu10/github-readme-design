/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../styles/StarRepo/StarRepoPage.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import $ from "jquery";
import "animate.css";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../../../firebase";
//
function User({ data, user }) {
  const [getDarkMode, setDarkMode] = useState(false);
  const [getStatus, setStatus] = useState("👨🏻‍💻 Setting up please wait..... ⚡️");
  const [getCurrentRepo, setCurrentRepo] = useState("");
  const [getCurrentLicense, setCurrentLicense] = useState("");
  const [informationPopup, setInformationPopup] = useState(true);

  useEffect(() => {
    logEvent(analytics, "screen_view");
    // ::::> Debug
    // console.log("data", data);
    // console.log("user", user);
    setTimeout(() => {
      setStatus("...");
      if (informationPopup) {
        alert("ℹ Information : You can forcely change the License");
        setInformationPopup(false);
      }
    }, 800);
  }, [getCurrentRepo, getDarkMode, getCurrentLicense]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Star-Repo</title>
        <meta name="Starred-Repo" content="From Github-Readme-Design" />
        <link rel="icon" href="/rishufavicon.ico" />
      </Head>
      <Navbar title={"Starred-Repo"} />
      <main className={styles.outerContainer}>
        <div className={styles.containerForBoxAndTitle}>
          <div className={styles.selectBox}>
            <div className={styles.selectBoxOne}>
              Please select the Repo below:
            </div>
            <div className={styles.selectBoxTwo}>
              <select
                className={styles.select}
                value={getCurrentRepo}
                onChange={(e) => {
                  e.preventDefault();
                  setCurrentLicense("");
                  setStatus("Loading...");
                  setCurrentRepo(e?.target?.value);
                  for (let i = 0; i < data?.length; i++) {
                    if (data[i].name === e?.target?.value) {
                      if (data[i]?.license !== null) {
                        setCurrentLicense(data[i]?.license?.spdx_id);
                      }
                      setTimeout(() => {
                        setStatus("...");
                      }, 1000);
                    }
                    setCurrentLicense(
                      getCurrentLicense !== "" ? getCurrentLicense : "Unlicense"
                    );
                  }
                }}
              >
                <option value="choose_repo">Choose Repo</option>
                {data?.map((item, index) => (
                  <option value={item?.name} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.titleBox}>
            <div className={styles.boxOne}>#Preview</div>
            <div className={styles.boxTwo}>
              <select
                className={styles.darkLightMode}
                onChange={(e) => {
                  e.preventDefault();
                  setDarkMode(!getDarkMode);
                }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              {/*  */}
              <div className={styles.licenseBox}>
                <select
                  className={styles.licenseSelect}
                  onChange={(e) => {
                    e.preventDefault();
                    setCurrentLicense(e?.target?.value);
                  }}
                >
                  <option value="">License</option>
                  <option value="Apache 2.0">Apache 2.0</option>
                  <option value="MIT">MIT</option>
                  <option value="ISC">ISC</option>
                  <option value="Unlicense">Unlicense</option>
                </select>
              </div>
              {/*  */}
              <button
                id="copyButton"
                className={styles.copyButton}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("getCurrentRepo", getCurrentRepo);
                  console.log("getCurrentLicense", getCurrentLicense);
                  // Clipboard API:-
                  navigator.clipboard
                    .writeText(
                      getDarkMode
                        ? getCurrentLicense !== "" &&
                          getCurrentLicense !== "Unlicense"
                          ? `/api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`
                          : `/api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}`
                        : getCurrentLicense !== "" &&
                          getCurrentLicense !== "Unlicense"
                        ? `/api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`
                        : `/api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}`
                    )
                    .then((v) => {
                      // ************* Some style for clicking the button ******************
                      //  Using J-Query and Animate.css
                      setStatus("URL Coppied Successfully");
                      $("#copyButton").addClass(
                        "animate__animated animate__bounceIn"
                      );
                      setTimeout(() => {
                        setStatus("...");
                        $("#copyButton").removeClass(
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
        </div>
        {/* ::::::::::::::::::::::::::::::::::::: */}
        <div
          className={styles.designBackground}
          style={
            {
              // backgroundColor: getDarkMode ? "#0b2850" : "white",
              // color: getDarkMode ? "#dde1eb" : "#0b2850",
            }
          }
        >
          {/* background below */}
          <span
            style={{
              marginBottom: 30,
            }}
          >
            {getStatus}
          </span>
          {getDarkMode ? (
            getCurrentLicense !== "" && getCurrentLicense !== "Unlicense" ? (
              <img
                id="getLink"
                src={`/api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`}
              />
            ) : (
              <img
                id="getLink"
                src={`/api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}`}
              />
            )
          ) : getCurrentLicense !== "" && getCurrentLicense !== "Unlicense" ? (
            <img
              id="getLink"
              src={`/api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`}
            />
          ) : (
            <img
              id="getLink"
              src={`/api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}`}
            />
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
}

export default User;

// This gets called on every request
export async function getServerSideProps(context) {
  let name = context?.params?.user;
  const res = await fetch(`https://api.github.com/users/${name}/repos`, {
    methode: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.AUTH_TOKEN}`,
    },
  });
  const data = await res.json();
  return {
    props: {
      data: data,
      user: name,
    },
  };
}
