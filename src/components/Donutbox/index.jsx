import React from "react";
import styles from "../../styles/Donutbox.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import sanityClient from "../../lib/Client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Donutbox = ({ donut }) => {
  return (
    <div className={styles.donut_container}>
      <div className={styles.main_box}>
        <Link to={`/${donut.donutName}`}>
          <div className={styles.image}>
            <img src={urlFor(donut.donutImage)} alt={donut.donutName} />
          </div>
        </Link>
        <Link to={`/${donut.donutName}`}>
        <div className={styles.details}>
          <div className={styles.title}>
            <p>{donut.donutName}</p>
          </div>
            <div className={styles.plus}>
              <FaPlusCircle />
            </div>
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Donutbox;
