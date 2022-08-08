import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { Donutbox, ArrowBack } from "../../components";
import styles from "../../styles/Catalogo.module.css";
import sanityClient from "../../lib/Client";

const Catalogo = () => {
  const [donuts, setDonuts] = useState(null);
  const { slug } = useParams();

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
  }, [slug]);

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
          {donuts?.map((donut) => (
          <div className={styles.card} key={donut._id}>
          <Donutbox donut={donut} />
          </div>))}
        </div>
      </div>
    </>
  );
};

export default Catalogo;
