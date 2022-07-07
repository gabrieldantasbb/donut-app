import React from "react";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
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
  );
};

export default Header;
