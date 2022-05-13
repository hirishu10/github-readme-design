import React, { useState } from "react";
// import SplashAdmin from "./splashadmin";
// import Splash from "./splash";
// import AskMe from "../components/typescriptComponents/AskMe";
// import SmallCards from "../components/typescriptComponents/SmallCards.tsx";
// import ExperienceCard from "../components/typescriptComponents/ExperienceCard.tsx";
// import LanguageCard from "../components/typescriptComponents/LanguageCard.tsx";
// import { auth, dbAuth } from "../firebase";
// import * as firebase from "firebase/auth";
// import * as firestore from "firebase/firestore";
import { useEffect } from "react";
// import MessagesAndDownloadBlock from "../components/typescriptComponents/MessagesAndDownloadBlock.tsx";
import Head from "next/head";
import TestCard from "../components/TestCard";
// import  from "react-firebase-hooks";
// import $ from "jquery";
// import one from "../public/test/rishuOne.gif";
// import two from "../public/test/rishuTwo.gif";
// import Image from "next/image";
// import FooterBar from "../components/FooterBar";
// import FooterBarSecond from "../components/FooterBarSecond";

import sCode from "../styles/PersonalPageForTesting.module.scss";
import {
  getCustomDayNameFull,
  getCustomDayNameShort,
  getCustomMonthNameFull,
  getCustomMonthNameShort,
  getCustomDate,
  getCustomHour,
  getCustomMinute,
  getCustomSecond,
  getCustomAmPm,
  getCustomFullDateAndTimeWithAmPm,
  getCustomFullDateAndTimeWithAmPmIncludingSeconds,
} from "@hirishu10/simple-date-time";
//
function Personalpagefortesting() {
  const toDate = getCustomDate();
  const shortDay = getCustomDayNameShort();
  const shortMonth = getCustomMonthNameShort();
  const year = "2022";
  const timestamp = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  // const [timestampwithSeconds, setTimestampwithSeconds] = useState("timestamp");
  const runnableClock = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  const [getDateTime, setDateTime] = useState("Date-Time");

  const arr = [
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/java-icon.png",
      color: "#ffffff",
      name: "Java",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=java&sort=",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/python-icon.png",
      color: "#ffffff",
      name: "Python",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=python&sort=",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/js-icon.png",
      color: "#eed767",
      name: "JavaScript",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=javascript&sort=",
      know: "80%",
      syntax: "60%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/ts-icon.png",
      color: "#2a7fc6",
      name: "TypeScript",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=typescript&sort=",
      know: "50%",
      syntax: "40%",
    },
    // ***************************
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/html-icon.png",
      color: "#ffffff",
      name: "HTML",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=html&sort=",
      know: "80%",
      syntax: "70%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/css-icon.png",
      color: "#ffffff",
      name: "CSS",
      link: "https://github.com/hirishu10?tab=repositories&q=&type=&language=css&sort=",
      know: "80%",
      syntax: "70%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/bootstrapf-icon.png",
      color: "#ffffff",
      name: "Bootstrap",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/node-icon.png",
      color: "#ffffff",
      name: "Node.js",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "60%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/firebase-icon.png",
      color: "#ffffff",
      name: "Firebase",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "80%",
      syntax: "70%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/express-icon.png",
      color: "#ffffff",
      name: "Express",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/mongodb-icon.png",
      color: "#ffffff",
      name: "MongoDB",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "80%",
      syntax: "70%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/mysql-icon.png",
      color: "#ffffff",
      name: "My SQL",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "80%",
      syntax: "60%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/sqllite-icon.png",
      color: "#ffffff",
      name: "SQL Lite",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "60%",
      syntax: "40%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/react-icon.png",
      color: "#ffffff",
      name: "React",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "80%",
      syntax: "70%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/redux-icon.png",
      color: "#ffffff",
      name: "Redux",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/reactnative-icon.png",
      color: "#ffffff",
      name: "React-Native",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "70%",
      syntax: "50%",
    },
    {
      src: "https://raw.githubusercontent.com/hirishu10/my-assets/main/svg/api-icon.png",
      color: "#ffffff",
      name: "API",
      link: "https://github.com/hirishu10?tab=repositories",
      know: "80%",
      syntax: "60%",
    },
    // *** Below for testing ***********
    // {
    //   src: "",
    //   color: "#ffffff",
    //   name: "Other",
    //   link: "https://github.com/hirishu10?tab=repositories",
    //   know: "70%",
    //   syntax: "50%",
    // },
  ];

  const testGit = {
    login: "hirishu10",
    id: 95957258,
    node_id: "U_kgDOBbgxCg",
    avatar_url: "https://avatars.githubusercontent.com/u/95957258?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hirishu10",
    html_url: "https://github.com/hirishu10",
    followers_url: "https://api.github.com/users/hirishu10/followers",
    following_url:
      "https://api.github.com/users/hirishu10/following{/other_user}",
    gists_url: "https://api.github.com/users/hirishu10/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hirishu10/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hirishu10/subscriptions",
    organizations_url: "https://api.github.com/users/hirishu10/orgs",
    repos_url: "https://api.github.com/users/hirishu10/repos",
    events_url: "https://api.github.com/users/hirishu10/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hirishu10/received_events",
    type: "User",
    site_admin: false,
    name: "Rishu Chowdhary",
    company: null,
    blog: "",
    location: null,
    email: "hi.10rishu@gmail.com",
    hireable: true,
    bio: null,
    twitter_username: "@rishuchowdhary",
    public_repos: 14,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2021-12-11T07:43:50Z",
    updated_at: "2022-04-14T06:45:23Z",
  };
  const title = "Software Developer";
  // const title = "Full Stack Developer";
  // const title = "Software Engineering II";
  // const title = "Data Analyst";

  useEffect(() => {
    setTimeout(() => {
      setDateTime(runnableClock);
    }, 1000);
  }, [runnableClock]);

  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="test" content="testing page" />
        {/* <link rel="icon" href="/rishufavicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TestCard /> */}
      <svg
        width="1280"
        height="200"
        viewBox="0 0 1280 200"
        className={sCode.outer}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          // boxShadow: "0px 0px 5px 1px #acacac",
          // border: "1px solid silver",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <g className={sCode.groupFirst}>
          <rect
            width="100%"
            height="100%"
            style={{
              fill: "#ffffff",
              strokeWidth: 1,
            }}
          />
          <text
            className={sCode.textLayout}
            x="20"
            y="70"
            textAnchor="start"
            fontSize={50}
          >
            {testGit?.name}
          </text>
          <text
            className={sCode.textLayout}
            x="20"
            y="100"
            textAnchor="start"
            fontSize={20}
          >
            {`👨🏻‍💻 ${title}`}
          </text>
          <text
            className={sCode.textLayout}
            x="20"
            y="130"
            textAnchor="start"
            fontSize={20}
          >
            {`📧 ${testGit?.email}`}
          </text>
          <text
            className={sCode.textLayout}
            x="1050"
            y="80"
            textAnchor="start"
            fontSize={60}
            fill={"#f82020"}
          >
            {toDate}
          </text>
          <text
            className={sCode.textLayout}
            x="1110"
            y="80"
            textAnchor="start"
            fontSize={40}
          >
            {shortMonth}
          </text>
          <text
            className={sCode.textLayout}
            x="1050"
            y="150"
            textAnchor="start"
            fontSize={70}
          >
            {year}
          </text>
        </g>
        {/* footer */}
        <text
          className={sCode.textLayout}
          x="1150"
          y="190"
          textAnchor="start"
          fontSize={10}
          fill={"#e3e3e3"}
        >
          {"Github-Readme-Design"}
        </text>
      </svg>
    </>
  );
}

export default Personalpagefortesting;
// <svg xmlns="http://www.w3.org/2000/svg">
//   <path
//     // d="M100,100 L150,150"
//     d="M 168.6 44.501 L 168.6 77.001 L 157.3 77.001 L 157.3 46.201 A 23.736 23.736 0 0 0 156.92 41.814 Q 156.455 39.341 155.418 37.4 A 11.934 11.934 0 0 0 153.6 34.851 A 12.201 12.201 0 0 0 146.709 31.18 A 17.668 17.668 0 0 0 143.5 30.901 A 16.733 16.733 0 0 0 139.094 31.451 A 12.166 12.166 0 0 0 133.35 34.851 A 12.766 12.766 0 0 0 130.424 40.022 Q 129.819 42.012 129.658 44.412 A 26.78 26.78 0 0 0 129.6 46.201 L 129.6 77.001 L 118.2 77.001 L 118.2 3.001 L 129.6 3.001 L 129.6 28.301 A 18.973 18.973 0 0 1 136.4 23.145 A 22.172 22.172 0 0 1 136.95 22.901 A 23.906 23.906 0 0 1 144.742 21.068 A 28.311 28.311 0 0 1 146.7 21.001 A 25.125 25.125 0 0 1 153.317 21.844 A 21.325 21.325 0 0 1 157.95 23.701 A 19.056 19.056 0 0 1 165.386 31.049 A 23.046 23.046 0 0 1 165.75 31.701 Q 168.521 36.854 168.598 44.085 A 38.995 38.995 0 0 1 168.6 44.501 Z M 221.6 21.901 L 233 21.901 L 233 77.001 L 221.6 77.001 L 221.6 70.501 A 17.962 17.962 0 0 1 215.997 75.138 A 21.692 21.692 0 0 1 214.55 75.851 Q 210.2 77.801 205.3 77.801 A 26.83 26.83 0 0 1 198.415 76.947 A 22.765 22.765 0 0 1 193.65 75.101 Q 188.5 72.401 185.55 67.101 Q 182.6 61.801 182.6 54.301 L 182.6 21.901 L 193.9 21.901 L 193.9 52.601 A 23.736 23.736 0 0 0 194.28 56.988 Q 194.745 59.461 195.782 61.402 A 11.934 11.934 0 0 0 197.6 63.951 A 12.201 12.201 0 0 0 204.491 67.622 A 17.668 17.668 0 0 0 207.7 67.901 A 16.733 16.733 0 0 0 212.106 67.351 A 12.166 12.166 0 0 0 217.85 63.951 A 12.766 12.766 0 0 0 220.776 58.781 Q 221.381 56.79 221.542 54.39 A 26.78 26.78 0 0 0 221.6 52.601 L 221.6 21.901 Z M 61.8 60.101 L 73.6 60.101 A 7.865 7.865 0 0 0 76.316 65.423 A 10.771 10.771 0 0 0 76.95 65.951 A 11.1 11.1 0 0 0 81.748 68.048 A 15.387 15.387 0 0 0 84.6 68.301 A 20.161 20.161 0 0 0 87.39 68.12 Q 90.228 67.723 92.05 66.451 Q 94.7 64.601 94.7 61.701 Q 94.7 58.601 91.75 57.101 A 24.809 24.809 0 0 0 89.818 56.234 Q 87 55.095 82.4 53.801 A 134.069 134.069 0 0 1 78.409 52.644 Q 74.859 51.551 72.3 50.501 Q 68.4 48.901 65.55 45.601 A 11.348 11.348 0 0 1 63.101 40.656 Q 62.702 38.933 62.7 36.917 A 20.839 20.839 0 0 1 62.7 36.901 Q 62.7 32.501 65.3 28.851 A 15.873 15.873 0 0 1 69.681 24.728 A 21.088 21.088 0 0 1 72.75 23.101 A 25.013 25.013 0 0 1 79.021 21.348 A 33.02 33.02 0 0 1 83.9 21.001 Q 92.371 21.001 97.877 24.858 A 18.556 18.556 0 0 1 99.05 25.751 A 16.632 16.632 0 0 1 105.033 36.827 A 22.889 22.889 0 0 1 105.2 38.701 L 93.8 38.701 A 8.976 8.976 0 0 0 93.035 35.656 A 7.914 7.914 0 0 0 90.8 32.801 A 9.229 9.229 0 0 0 87.395 31.085 Q 85.656 30.601 83.5 30.601 Q 80.576 30.601 78.538 31.319 A 7.839 7.839 0 0 0 76.6 32.301 Q 74.2 34.001 74.2 36.801 A 4.855 4.855 0 0 0 75.654 40.359 A 5.866 5.866 0 0 0 75.8 40.501 Q 77.4 42.001 79.7 42.851 Q 81.461 43.502 84.511 44.416 A 206.892 206.892 0 0 0 86.5 45.001 A 105.958 105.958 0 0 1 90.616 46.183 Q 93.914 47.207 96.35 48.251 Q 100.2 49.901 103 53.101 A 11.271 11.271 0 0 1 105.428 57.851 Q 105.848 59.518 105.897 61.475 A 20.376 20.376 0 0 1 105.9 61.601 Q 105.9 66.301 103.3 70.001 A 16.21 16.21 0 0 1 98.453 74.493 A 20.885 20.885 0 0 1 95.95 75.801 A 23.776 23.776 0 0 1 90.261 77.47 A 32.902 32.902 0 0 1 84.8 77.901 A 30.87 30.87 0 0 1 78.275 77.238 A 25.025 25.025 0 0 1 73.15 75.551 A 22.484 22.484 0 0 1 68.285 72.574 A 18.848 18.848 0 0 1 65 69.151 Q 62 65.101 61.8 60.101 Z M 27.9 21.001 L 27.9 32.801 L 25 32.801 Q 18.3 32.801 14.85 36.201 Q 11.4 39.601 11.4 48.001 L 11.4 77.001 L 0 77.001 L 0 21.901 L 11.4 21.901 L 11.4 29.901 Q 13.9 25.701 18.05 23.351 A 17.776 17.776 0 0 1 23.843 21.332 A 23.9 23.9 0 0 1 27.9 21.001 Z M 38.4 21.901 L 49.8 21.901 L 49.8 77.001 L 38.4 77.001 L 38.4 21.901 Z M 44.2 14.601 Q 41.1 14.601 39 12.501 A 7.046 7.046 0 0 1 36.901 7.398 A 9.082 9.082 0 0 1 36.9 7.301 Q 36.9 4.201 39 2.101 A 7.046 7.046 0 0 1 44.103 0.002 A 9.082 9.082 0 0 1 44.2 0.001 A 6.937 6.937 0 0 1 49.234 2.036 A 8.261 8.261 0 0 1 49.3 2.101 A 7.046 7.046 0 0 1 51.399 7.204 A 9.082 9.082 0 0 1 51.4 7.301 Q 51.4 10.401 49.3 12.501 A 6.933 6.933 0 0 1 44.294 14.601 A 8.51 8.51 0 0 1 44.2 14.601 Z"
//     // fill="#000"
//     // style="stroke:#ff0000; stroke-width:3; fill:none"
//     style={{
//       // stroke: "#ff0000",
//       stroke: "#333",
//       strokeWidth: 3,
//       fill: "none",
//     }}
//   />
// </svg>
