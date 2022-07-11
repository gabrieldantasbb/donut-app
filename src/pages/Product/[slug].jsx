import React from "react";
import styles from "../../styles/Service.module.css";
import donut from "../../assets/donut_homer.png";
import { Header, ArrowBack, Contact, Footer } from "../../components";

const DonutInfo = () => {
  return (
    <div className={styles.container}>     
      <div className={styles.main}>
        <div className={styles.arrow}><ArrowBack/></div>
        <div className={styles.main_img}>
          <img src={donut} alt="donut" height={300} width={300} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>Donut Açúcar Caramelizado</h1>
          </div>
          <div className={styles.content_text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, 
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
    </div>
  );
};

export default DonutInfo;
