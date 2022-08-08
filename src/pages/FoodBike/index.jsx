import React, { useState, useEffect } from "react";
import styles from "../../styles/Service.module.css";
import { ArrowBack, Contact } from "../../components";
import sanityClient from "../../lib/Client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const FoodBike = () => {

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
    {banners?.slice(2, 3).map((banner) => (
      <div className={styles.main} key={banner._id}>
        <div className={styles.arrow}><ArrowBack/></div>
        <div className={styles.main_img}>
          <img
              src={urlFor(banner.bannerImage)}  
              alt={banner.bannerName}
              height={340} 
              width={305} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>{banner.bannerName}</h1>
          </div>
          <div className={styles.content_text}>
            <p>
              {banner.bannerDesc}
            </p>
          </div>
          <div className={styles.contact_button}>
          <Contact
            link={"https://www.google.com.br/maps/place/R.+Cel.+Agostinho,+23+-+Campo+Grande,+Rio+de+Janeiro+-+RJ,+23050-360/@-22.9053955,-43.5602481,19z/data=!3m1!4b1!4m8!1m2!2m1!1scal%C3%A7ad%C3%A3o+de+campo+grande!3m4!1s0x9be157bb3ebd55:0x7a7ab83563a9fb0b!8m2!3d-22.9053967!4d-43.5597009"}
            desc={"Encontre-nos"}
          />
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default FoodBike;