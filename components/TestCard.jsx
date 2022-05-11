import React, { useState } from "react";
import sCode from "../styles/GithubProfile.module.scss";

import { useEffect } from "react";

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
const TestCard = () => {
  const toDate = getCustomDate();
  const shortDay = getCustomDayNameShort();
  const timestamp = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  // const [timestampwithSeconds, setTimestampwithSeconds] = useState("timestamp");
  const runnableClock = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
  const [getDateTime, setDateTime] = useState("Date-Time");

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

  useEffect(() => {
    setTimeout(() => {
      setDateTime(runnableClock);
    }, 1000);
  }, [runnableClock]);

  return (
    <svg
      width="800"
      height="200"
      // viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      stroke="silver"
      // style={{
      //   border: "1px solid silver",
      // }}
      color="red"
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
        {/* Test */}
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
        {/* Date */}
        {/* <text
            className={sCode.textLayout}
            x="600"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={30}
          >
            {timestampwithSeconds}
          </text> */}
        {/* Day */}
        {/* <text
            className={sCode.textLayout}
            x="650"
            y="50"
            textAnchor="start"
            // font-family="Poppins"
            fontSize={30}
          >
            {shortDay}
          </text> */}
      </g>
    </svg>
  );
};
export default TestCard;

`
<div><svg width="800" height="200" xmlns="http://www.w3.org/2000/svg" style={{border: "1px solid silver"}} ><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@500&display=swap" rel="stylesheet" ></link><g className={sCode.groupFirst}><rect width="100%" height="40%" style={{fill: "lightgreen",strokeWidth: 1}}/><text className={sCode.textLayout}x="10"y="50"textAnchor="start"fontSize={30}>{testGit?.name}</text><text className={sCode.textLayout}x="600"y="50"textAnchor="start"fontSize={30}>{timestampwithSeconds}</text>g></svg></div>  

`;
