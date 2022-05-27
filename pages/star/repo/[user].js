import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../styles/StarRepo/StarRepoPage.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faArrowRight,
  faCogs,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; //
import $ from "jquery";
import "animate.css";
import { logEvent } from "@firebase/analytics";
import { analytics } from "../../../firebase";
//
function User({ data, user }) {
  const [getDarkMode, setDarkMode] = useState(false);
  const [getStatus, setStatus] = useState("👨🏻‍💻 Setting up please wait..... ⚡️");
  const [getCurrentRepo, setCurrentRepo] = useState("");
  // const [getCurrentDescription, setCurrentDescription] = useState("");
  // const [getCurrentStarCount, setCurrentStarCount] = useState("");
  // const [getCurrentForkCount, setCurrentForkCount] = useState("");
  // const [getCurrentLanguage, setCurrentLanguage] = useState("");
  const [getCurrentLicense, setCurrentLicense] = useState("");
  const [informationPopup, setInformationPopup] = useState(true);

  useEffect(() => {
    // logEvent(analytics, "screen_view");
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
                  setStatus("Loading...");
                  setCurrentRepo(e?.target?.value);
                  for (let i = 0; i < data?.length; i++) {
                    if (data[i].name === e?.target?.value) {
                      // setCurrentDescription(data[i]?.description);
                      // setCurrentStarCount(data[i]?.stargazers_count);
                      // setCurrentForkCount(data[i]?.forks_count);
                      // setCurrentLanguage(data[i]?.language);
                      if (data[i]?.license !== null) {
                        setCurrentLicense(data[i]?.license?.spdx_id);
                      } else {
                        setCurrentLicense(
                          getCurrentLicense !== ""
                            ? getCurrentLicense
                            : "Unlicense"
                        );
                      }
                      setTimeout(() => {
                        setStatus("...");
                      }, 1000);
                    }
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
                          ? `${process.env.APP_NAME}api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`
                          : `${process.env.APP_NAME}api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}`
                        : getCurrentLicense !== "" &&
                          getCurrentLicense !== "Unlicense"
                        ? `${process.env.APP_NAME}api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`
                        : `${process.env.APP_NAME}api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}`
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
          style={{
            backgroundColor: getDarkMode ? "#0b2850" : "white",
            color: getDarkMode ? "#dde1eb" : "#0b2850",
          }}
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
                src={`${process.env.APP_NAME}api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`}
              />
            ) : (
              <img
                id="getLink"
                src={`${process.env.APP_NAME}api/starRepo/getStarDark?user=${user}&repo=${getCurrentRepo}`}
              />
            )
          ) : getCurrentLicense !== "" && getCurrentLicense !== "Unlicense" ? (
            <img
              id="getLink"
              src={`${process.env.APP_NAME}api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}&license=${getCurrentLicense}`}
            />
          ) : (
            <img
              id="getLink"
              src={`${process.env.APP_NAME}api/starRepo/getStarLight?user=${user}&repo=${getCurrentRepo}`}
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
  // const res = await fetch(`https://api.github.com/users/${name}/starred`);
  const res = await fetch(`https://api.github.com/users/${name}/repos`);
  const data = await res.json();
  return {
    props: {
      data: data,
      user: name,
    },
  };
}
