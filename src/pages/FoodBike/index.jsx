import React from "react";
import styles from "../../styles/Service.module.css";
import donut from "../../assets/donut_homer.png";
import { ArrowBack, Contact, Footer } from "../../components";

const FoodBike = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.main}>
        <div className={styles.arrow}><ArrowBack/></div>
        <div className={styles.main_img}>
          <img
              src={donut}  
              alt="donut" 
              height={300} 
              width={300} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>Food Bike</h1>
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
            link={"https://www.google.com.br/maps/place/R.+Cel.+Agostinho,+23+-+Campo+Grande,+Rio+de+Janeiro+-+RJ,+23050-360/@-22.9053955,-43.5602481,19z/data=!3m1!4b1!4m8!1m2!2m1!1scal%C3%A7ad%C3%A3o+de+campo+grande!3m4!1s0x9be157bb3ebd55:0x7a7ab83563a9fb0b!8m2!3d-22.9053967!4d-43.5597009"}
            desc={"Encontre-nos"}
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

export default FoodBike;