import React, { useState } from "react";
import styles from "./css/Footer.module.css";
import { footerAppLinks, footerCompanyLinks, socialLinks } from "../static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const FooterLink = (props) => {
  const { title, link } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={link}>{title}</a>
      {hover && (
        <FontAwesomeIcon icon={faSquareArrowUpRight} className={styles.icon} />
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className={styles.flex}>
        <div className={styles.wrapper}>
          <img
            src="https://axocheck.com/img/axocheck.423dbd19.svg"
            alt="footer logo"
          />
          <div className={styles.healthcare}>
            Healthcare in the comfort of your home
          </div>
        </div>

        <div className={styles.wrapper}>
          <h3>App</h3>
          {footerAppLinks.map((text, index) => (
            <FooterLink key={index} title={text.title} link={text.link} />
          ))}
        </div>

        <div className={styles.wrapper}>
          <h3>Company</h3>
          {footerCompanyLinks.map((text, index) => (
            <FooterLink key={index} title={text.title} link={text.link} />
          ))}
        </div>

        <div className={styles.wrapper}>
          <h3>Follow</h3>
          <div className={styles["social-icons"]}>
            {socialLinks.map((icon, index) => (
              <a href={icon.link} key={index}>
                <img src={icon.src} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
