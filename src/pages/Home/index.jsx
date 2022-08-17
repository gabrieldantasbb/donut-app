import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { Donutbox, Contact } from "../../components";
import MenuMobile from "../../components/Navbar/MobileNavigation";
import sanityClient from "../../lib/Client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Home = () => {
  const [donuts, setDonuts] = useState(null);
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banners"]{
        _id,
        bannerName,
        bannerDesc,
        bannerImage{
          asset->{
            _id,
            url
          },
        }
      }`
      )
      .then((data) => setBanners(data))
      .catch(console.error);
  }, []);

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
        {banners?.slice(0, 1).map((banner) => (
          <div className={styles.hero_container} key={banner._id}>
            <div className={styles.hero_content}>
              <div className={styles.hero_title}>
                <h1>{banner.bannerName}</h1>
              </div>
              <div className={styles.subtitle}>
                <p>{banner.bannerDesc}</p>
              </div>
              <div className={styles.hero_button}>
                <Contact link="/catalogo" desc="Catálogo" />
              </div>
            </div>
            <div className={styles.hero_banner}>
              <img src={urlFor(banner.bannerImage)} alt="Two donuts" />
            </div>
          </div>
        ))}
        <div className={styles.title}>
          <h1>
            Qual Donut
            <br /> você quer hoje?
          </h1>
        </div>
        <div className={styles.grid}>
          {donuts?.slice(0, 6).map((donut) => (
            <div className={styles.card} key={donut._id}>
              <Donutbox donut={donut} />
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Link to="catalogo">
            <button>Ver mais</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
