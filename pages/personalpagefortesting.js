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

import sCode from "../styles/GithubProfile.module.scss";
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
  // const toDate = getCustomDate();
  // const shortDay = getCustomDayNameShort();
  // const timestamp = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  // // const [timestampwithSeconds, setTimestampwithSeconds] = useState("timestamp");
  // const runnableClock = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  // const [getDateTime, setDateTime] = useState("Date-Time");

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

  // ********************************************************
  // ************** Below code is for testing ***************
  // ************************ and debuging process **********
  // *********** Please don't delete the below code *********
  // useEffect(() => {
  //   firebase
  //     .signInWithEmailAndPassword(
  //       auth,
  //       process.env.DB_KEY,
  //       process.env.DB_PASSWORD
  //     )
  //     .then((res) => {
  //       console.log("auth", res);
  //       //
  //       setTimeout(() => {
  //         auth.signOut();
  //         //
  //         setTimeout(() => {
  //           console.log("auth :>> ", auth.currentUser);
  //         }, 300);
  //       }, 200);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);
  // ********************************************************
  // ************** above code is for testing ***************
  // ************************ and debuging process **********
  // *********** Please don't delete the above code *********

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
    email: null,
    hireable: true,
    bio: null,
    twitter_username: null,
    public_repos: 14,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2021-12-11T07:43:50Z",
    updated_at: "2022-04-14T06:45:23Z",
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDateTime(runnableClock);
  //   }, 1000);
  // }, [runnableClock]);

  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          // marginTop: 100,
          // marginBottom: 100,
        }
      }
    >
      <Head>
        <title>Test</title>
        <meta name="test" content="testing page" />
        {/* <link rel="icon" href="/rishufavicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TestCard />

      {/* <svg
        width="800"
        height="200"
        // viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          border: "1px solid silver",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <g className={sCode.groupFirst}>
          <rect
            width="100%"
            height="40%"
            style={{
              fill: "lightgreen", //rgb(0,0,255)
              strokeWidth: 1,
              // stroke: "black", //rgb(0,0,0)
            }}
          />
          <text
            className={sCode.textLayout}
            x="10"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={30}
          >
            {testGit?.name}
          </text>
          <text
            className={sCode.textLayout}
            x="500"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={18}
          >
            {getDateTime}
          </text>
          <text
            className={sCode.textLayout}
            x="600"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={30}
          >
            {timestampwithSeconds}
          </text>
          <text
            className={sCode.textLayout}
            x="650"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={30}
          >
            {shortDay}
          </text>
        </g>
      </svg> */}
    </div>
  );
}

export default Personalpagefortesting;
