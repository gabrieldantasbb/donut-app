import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { Donutbox, ApiMap } from "../../components";
import MenuMobile from "../../components/Navbar/MobileNavigation";
import sanityClient from "../../lib/Client";
import { Link } from "react-router-dom"



const Home = () => {
  const [donuts, setDonuts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "donuts"]{
        _id,
        donutName,
        donutDesc,
        donutImage{
          asset->{
            _id,
            url
          },
        }
      }`
      )
      .then((data) => setDonuts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <div className={styles.main}>
      <div className={styles.menuMobile}>
          <MenuMobile />
        </div>
        <h1 className={styles.title}>
          Qual Donut
          <br /> você quer hoje?
        </h1>
        <div className={styles.search_bar}>
          <input type={"text"} placeholder={"Pesquisar..."} />
        </div>
        <div className={styles.grid}>
        {donuts?.slice(0, 6).map((donut) => (
          <div className={styles.card} key={donut._id}>
          <Donutbox donut={donut} />
          </div>))}
        </div>
        <div className={styles.button}>
          <Link to='catalogo'><button>Ver mais</button></Link>
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
    </>
  );
};



export default Home;
