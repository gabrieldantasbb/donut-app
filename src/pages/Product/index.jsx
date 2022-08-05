import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/Client";
import styles from "../../styles/Service.module.css";
import { ArrowBack, Contact, Footer } from "../../components";
import  ImageUrlBuilder  from "@sanity/image-url";
import { useParams } from "react-router-dom";

const builder = ImageUrlBuilder(sanityClient);

function urlFor(source){
  return builder.image(source);
}

const Product = () => {
  const [donut, setDonut] = useState([]);
  const  {slug}  = useParams();

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
      .then((data) => setDonut(data))
      .catch(console.error);
  }, [slug]);

  return (
    <div className={styles.container}>
      {donut?.filter(donut => donut.donutName === slug ).map((donut) => (
      <div className={styles.main} key={donut._id}>
        <div className={styles.arrow}>
          <ArrowBack />
        </div>
        <div className={styles.main_img}>
          <img src={urlFor(donut.donutImage)} alt={donut.donutName} height={350} width={350} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>{donut.donutName}</h1>
          </div>
          <div className={styles.content_text}>
            <p>{donut.donutDesc}</p>
          </div>
          <div className={styles.contact_button}>
            <Contact
              link={"https://api.whatsapp.com/send?phone=5521979109269"}
              desc={"Encomendar"}
            />
          </div>
        </div>
      </div>
      ))}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
