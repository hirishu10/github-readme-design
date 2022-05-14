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
        width={1280}
        height={150}
        viewBox="0 0 1280 150"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 1280 150"
        xmlSpace="preserve"
      >
        {/*  */}
        <image
          id="image0"
          width="1120"
          height="145"
          x="0"
          y="0"
          opacity="0.2"
          href="data:image/png;base64,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"
        />

        {/*  */}
        <g>
          <rect
            width={1280}
            height={150}
            // fill="red"
            fill="none"
          />
          <text
            x="10"
            y="50"
            textAnchor="start"
            font-size="50"
            fontFamily={"system-ui,sans-serif"}
            fontWeight={"medium"}
            fill="#33312a"
          >
            Rishu Chowdhary
          </text>
          <text
            x={1100}
            y={60}
            textAnchor="start"
            fontSize={50}
            fill={"#f82020"}
            // fill={"white"}
            fontFamily={"system-ui,sans-serif"}
            fontWeight={"bolder"}
          >
            28
          </text>
          <text
            x={1162}
            y={60}
            textAnchor="start"
            fontSize={35}
            // fill={"white"}
            fontFamily={"system-ui,sans-serif"}
            fontWeight={"medium"}
          >
            May
          </text>
          <text
            x={1100}
            y={110}
            textAnchor="start"
            fontSize={55}
            // fill={"white"}
            fontFamily={"system-ui,sans-serif"}
            // fontWeight={"light"}
          >
            2022
          </text>
        </g>
        {/*  */}

        {/* footer */}
        <g>
          <rect
            x={0}
            y={135}
            width={1280}
            height={15}
            style={{ fill: "#333" }}
          ></rect>
          <text
            x={1180}
            y={145}
            textAnchor="start"
            fontSize={8}
            fill={"silver"}
            fontFamily={"system-ui,sans-serif"}
          >
            {"Github-Readme-Design"}
          </text>
        </g>
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
