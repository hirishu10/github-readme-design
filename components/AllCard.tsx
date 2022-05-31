import React from "react";
import styles from "../styles/AllCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

type AllCardConfig = {
  locked?: boolean;
  comingSoon?: boolean;
  backgroundImage?: string;
  title?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const AllCard = ({
  backgroundImage,
  locked,
  comingSoon,
  title,
  onClick,
}: AllCardConfig) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          backgroundImage ? backgroundImage : "/banner/headLight.svg"
        })`,
      }}
      className={styles.container}
      onClick={onClick}
    >
      {locked || comingSoon ? (
        <div className={styles.absoluteContainer}>
          {`${comingSoon ? "Coming Soon" : "Please Enter Github Username"}`}
        </div>
      ) : null}

      <div className={styles.containerOne}>
        <div className={styles.containerOneLabel}>
          {title ? title : "Github-Readme-Design"}
        </div>
      </div>
      <div className={styles.containerTwo}>
        <div className={styles.containerTwoInside}>
          <div
            className={styles.repoBoxButton}
            onMouseEnter={(e) => {
              e.preventDefault();
              e.currentTarget.style.color = "#333";
              e.currentTarget.style.transition = "0.3s";
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              e.currentTarget.style.color = "#bcbcbc";
              e.currentTarget.style.transition = "0.3s";
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} size={"sm"} style={{}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
