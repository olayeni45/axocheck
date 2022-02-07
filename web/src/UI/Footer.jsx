import React from "react";
import styles from "./css/Footer.module.css";
import { footerApp, footerCompany } from "../static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const FooterLink = (props) => {
  const { title, link } = props;
  return (
    <div className={styles.link}>
      <a href={link}>{title}</a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className={styles.flex}>
        <div className={styles.wrapper}>
          <img src="https://axocheck.com/img/axocheck.423dbd19.svg" />
          <div className={styles.healthcare}>
            Healthcare in the comfort of your home
          </div>
        </div>

        <div className={styles.wrapper}>
          <h3>App</h3>
          {footerApp.map((text, index) => (
            <FooterLink key={index} title={text.title} link={text.link} />
          ))}
        </div>

        <div className={styles.wrapper}>
          <h3>Company</h3>
          {footerCompany.map((text, index) => (
            <FooterLink key={index} title={text.title} link={text.link} />
          ))}
        </div>

        <div className={styles.wrapper}>
          <h3>Follow</h3>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
