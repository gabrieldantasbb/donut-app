import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import sanityClient from "../../lib/Client"
import imageUrlBuilder from "@sanity/image-url"
import styles from "../../styles/Service.module.css";
import { Header, ArrowBack, Contact, Footer } from "../../components";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}


const DonutInfo = () => {
  const [donuts, setDonuts] = useState(null);
	const { slug } = useParams();

  useEffect(() => {
		sanityClient
			.fetch(
				` *[_type == "donut" && donuts._ref in *[_type=="donuts" && title=="${slug}"]._id ]{
          _id,
              donutName,
              donutDesc,
              donutImage{
                asset->{
                  _id,
                  url
                },
              },
              donuts->{
                title
              }
        }`
			)
			.then((data) => setDonuts(data))
			.catch(console.error);
	}, [slug]);

  return (
    <div className={styles.container}>
      {donuts &&
      donuts.map((donut) => (<>   
      <div className={styles.main}>
        <div className={styles.arrow}><ArrowBack/></div>
        <div className={styles.main_img}>
          <img 
          src={urlFor(donut.donutImage)} 
          alt={donut.donutDesc} 
          height={350} 
          width={350} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>{donut.donutName}</h1>
          </div>
          <div className={styles.content_text}>
            <p>
              {donut.donutDesc}
            </p>
          </div>
          <div className={styles.contact_button}>
          <Contact
            link={"https://api.whatsapp.com/send?phone=5521979109269"}
            desc={"Encomendar"}
          />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      </>))}
    </div>
  );
};

export default DonutInfo;
