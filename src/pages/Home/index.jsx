import React from "react";
import styles from "../../styles/Home.module.css";
import { Donutbox, ApiMap, Header, Footer } from "../../components";

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Qual Donut
          <br /> você quer hoje?
        </h1>
        <div className={styles.search_bar}>
          <input type={"text"} placeholder={"Pesquisar..."} />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
        </div>
        <div className={styles.button}>
          <a>Ver mais</a>
        </div>
        <div className={styles.location}>
          <h1 className={styles.title}>Onde encontrar...</h1>
          <div className={styles.location_api}>
            <div>
              <ApiMap />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
