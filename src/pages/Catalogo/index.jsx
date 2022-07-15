import React, { useState, useEffect } from "react";
import { Donutbox, Footer, ArrowBack } from "../../components";
import styles from "../../styles/Catalogo.module.css";
import sanityClient from "../../lib/client"

const Catalogo = () => {
  const [products, setProducts] = useState(null);

useEffect(() => {
  sanityClient
  .fetch(
    `*[_type =="product"]`
  )
  .then((data) => setProducts(data)).catch(console.error);
}, []);

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
          {products?.map((product) => 
          <div className={styles.card}>
          <Donutbox key={product._id} product={product} />
          </div>)}
          {console.log({products})}
          {/*<div className={styles.card}>
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
          </div>*/}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Catalogo;
