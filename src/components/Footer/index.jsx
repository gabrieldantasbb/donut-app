import React from "react";
import styles from "../../styles/Footer.module.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_items}>
        <div>
          <h1>Sobre Nós</h1>
        </div>
        <div className={styles.footer_text}>
          <p>
            Uma empresa especializada em fabricação de donuts artesanais.
            Iniciamos nossas atividades em 2018 e hoje estamos presente
            fisicamente em Campo Grande e Santa Cruz, bairros da zona oeste do
            Rio de Janeiro. Além de entregas por encomenda para eventos, buffet
            e donut bar para casamentos e festas de aniversário.
          </p>
        </div>
        <div className={styles.footer_socials}>
          <div className={styles.icon_instagram}>
            <a
              href="https://www.instagram.com/donutsdaleticia/"
              className="btnInstagram"
              target="blank"
              rel="noreferrer"
            >
              <BsInstagram size={30} />
            </a>
          </div>
          <div className={styles.icon_whatsapp}>
            <a
              href="https://api.whatsapp.com/send?phone=5521979109269"
              className="btnWhatsapp"
              target="blank"
              rel="noreferrer"
            >
              <BsWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p> 2022 © Website designed by Gabriel Dantas</p>
      </div>
    </div>
  );
};

export default Footer;
