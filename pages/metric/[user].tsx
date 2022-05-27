import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/metricStyle/MetricCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon
import {
  faArrowRight,
  faCogs,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; //
import $ from "jquery";
import "animate.css";

//
function MetricCard() {
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
        <title>Metric Card</title>
        <meta name="metric-card" content="From Github-Readme-Design" />
        <link rel="icon" href="/rishufavicon.ico" />
        <link rel="preload" as="image" href="/myLogo.svg" />
      </Head>
      {/*  */}
      <div className={styles.outerContainer}>{"Hello Metric Card"}</div>
    </div>
  );
}

export default MetricCard;
