import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import sanityClient from "../../lib/Client";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Header = () => {
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
  return (
    <header className={styles.header_desktop}>
      {banners?.slice(1, 2).map((banner) => (
      <div className={styles.icon_home}>
      <Link to="/">
        <img
          src={urlFor(banner.bannerImage)}
          height={70}
          width={70}
          alt={banner.bannerDesc}
        />
        </ Link>
      </div>
      ))}
      <ul className={styles.menubar}>
        <li>
          <Link to="sobrenos">
            <p>SOBRE NÓS</p>
          </Link>
        </li>
        <li>
          <Link to="foodbike">
            <p>FOOD BIKE</p>
          </Link>
        </li>
        <li>
          <Link to="donutsbar">
            <p>DONUTS BAR</p>
          </Link>
        </li>
        <li>
          <Link to="catalogo">
            <p>CATÁLOGO</p>
          </Link>
        </li>
        <li className={styles.btn_home}>
          <Link to="/">
            <p>INÍCIO</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
