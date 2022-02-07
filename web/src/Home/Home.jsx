import React from "react";
import styles from "./Home.module.css";
import Layout from "../UI/Layout";
import Button from "../UI/Button";
const Home = () => {
  return (
    <Layout>
      {/*Free secion */}
      <section id="free">
        <div className={styles.popup}>
          <div className={styles.text}>
            Do you have our <span className={styles.free}>free</span> must-have
            family health checklist? Click here to download it now!
          </div>
          <div className={styles["btn-div"]}>
            <Button className={styles.btn}>download now</Button>
          </div>
        </div>
      </section>

      {/*Carousel */}
      <section id="carousel"></section>
    </Layout>
  );
};

export default Home;
