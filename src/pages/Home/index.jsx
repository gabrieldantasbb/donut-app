import React from "react";
import styles from "../../styles/Home.module.css";
import { Donut_box } from "../../components";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header_desktop}>
        <div className={styles.icon_home}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/fastfood-31/64/donut-doughnut-strawberry-snack-dessert-fastfood-food-512.png"
            height={70}
            width={70}
            alt="Picture of a donut"
          />
        </div>
        <div className={styles.menubar}>
          <div>
            <a>SOBRE NÓS</a>
          </div>
          <div>
            <a>FOOD BIKE</a>
          </div>
          <div>
            <a>DONUTS BAR</a>
          </div>
          <div>
            <a>CATÁLOGO</a>
          </div>
          <div className={styles.btn_home}>
            <a>HOME</a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Qual Donut você quer hoje?</h1>
        <div className={styles.search_bar}>
          <input type={"text"} placeholder={"Pesquisar..."} />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
          <div className={styles.card}>
            <Donut_box name={"Donut Home Simpson"} />
          </div>
        </div>
        <div className={styles.button}>
          <a>Ver mais</a>
        </div>
        <div>
          <div>
            <h1 className={styles.title}>Onde encontrar...</h1>
          </div>
          <div>
            <div>API MAPA</div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_items}>
          <div>
            <h1>Sobre Nós</h1>
          </div>
          <div className={styles.footer_text}>
            <p>
              Uma empresa especializada em fabricação de donuts artesanais.
              Iniciamos nossas atividades em 2018 e hoje estamos presente
              fisicamente em Campo Grande e Santa Cruz, bairros da zona oeste do
              Rio de Janeiro. Além de entregas por encomenda para eventos,
              buffet e donut bar para casamentos e festas de aniversário.
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
      </footer>
    </div>
  );
};

export default Home;
