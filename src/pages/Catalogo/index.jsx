import React from "react";
import { Donutbox, Footer, ArrowBack } from "../../components";
import styles from "../../styles/Catalogo.module.css";

const Catalogo = () => {

  return (
    <>
      <div className={styles.arrow}>
        <ArrowBack />
      </div>

      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Sabores incríveis!</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Donutbox name={"Donut Brigadeiro"}/>
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
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donutbox name={"Donut Home Simpson"} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Catalogo;
