import React from "react";
import styles from "./footer.module.css";
import metalogo from "../../assets/metalogo.png";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <div className={styles.clubname}>MetaCryst Club</div>
          <div className={styles.logo}>
            <a href="/">
              <img
                src={metalogo}
                alt="MetaCryst Club Logo"
                style={{
                  margin: "1vh 2vw",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "transparent",
                }}
              />
            </a>
          </div>
        </div>
        <div className={styles.quicklinks}>
          <div className={styles.title}>Quick Links</div>
          <div className={styles.links}>
            <Link to="/">➤ Home</Link>
          </div>
          <div className={styles.links}>
            <Link to="/explore">➤ Explore</Link>
          </div>
          <div className={styles.links}>
            <Link to="/projects">➤ Projects</Link>
          </div>
          <div className={styles.links}>
            <Link to="/team">➤ Team</Link>
          </div>
          <div className={styles.links}>
            <Link to="/events">➤ Events</Link>
          </div>
        </div>
        <div className={styles.contactus}>
          <div
            style={{
              fontSize: "larger",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              marginTop: "1vh",
            }}
          >
            Social media
          </div>
          <div className={styles.iconContainer}>
            <a
              href="https://www.instagram.com/metacryst_iiti/"
              target="_blank"
              rel="noreferrer"

            >
              <span className={styles.icons}><i class="fa-brands fa-instagram"></i></span>
            </a>
            {/* <a
              href="https://www.facebook.com/IIT-Indore-108781240868622"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icons}><i class="fa-brands fa-facebook"></i></span>
            </a> */}
            <a
              href="https://www.linkedin.com/company/metacryst-club-iit-indore/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icons}><i class="fa-brands fa-linkedin" ></i></span>
            </a>
            {/* <a
              href="https://twitter.com/IITIOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icons}><i class="fa-brands fa-x-twitter"></i></span>
            </a> */}
          </div>
        </div>
      </div>
      <center className={styles.rights}>
        &copy; MetaCryst Club - IIT Indore @2024. All Rights Reserved
      </center>
    </>
  );
}

export default Footer;
