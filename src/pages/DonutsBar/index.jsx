import React, { useState, useEffect } from "react";
import styles from "../../styles/Service.module.css";
import { ArrowBack, Contact } from "../../components";
import sanityClient from "../../lib/Client.js";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const DonutsBar = () => {
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
    <div className={styles.container}>
      {banners?.slice(2, 3).map((banner) =>(
          <div className={styles.main} key={banner._id}>
            <div className={styles.arrow}>
              <ArrowBack />
            </div>
            <div className={styles.main_img}>
              <img
                src={urlFor(banner.bannerImage)}
                alt={banner.bannerName}
                height={340}
                width={305}
              />
            </div>
            <div className={styles.main_content}>
              <div className={styles.title}>
                <h1>{banner.bannerName}</h1>
              </div>
              <div className={styles.content_text}>
                <p>{banner.bannerDesc}</p>
              </div>
              <div className={styles.contact_button}>
                <Contact
                  link={"https://api.whatsapp.com/send?phone=5521979109269"}
                  desc={"Fazer Orçamento"}
                />
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default DonutsBar;
