import React from "react";
import styles from "../styles/AllCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight, faCogs } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const AllCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <div className={styles.containerOneLabel}>Header Design Card</div>
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
            // onClick={getGithubData}
          >
            <FontAwesomeIcon icon={faArrowRight} size={"sm"} style={{}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
