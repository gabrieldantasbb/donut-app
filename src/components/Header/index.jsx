import React from "react";
import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header_desktop}>
      <div className={styles.icon_home}>
      <Link to="/">
        <img
          src="https://cdn0.iconfinder.com/data/icons/fastfood-31/64/donut-doughnut-strawberry-snack-dessert-fastfood-food-512.png"
          height={70}
          width={70}
          alt="Donut"
        />
        </ Link>
      </div>
      <ul className={styles.menubar}>
        <li>
          <Link to="sobrenos">
            <p>SOBRE NÓS</p>
          </Link>
        </li>
        <li>
          <Link to="foodbike">
            <p>FOOD BIKE</p>
          </Link>
        </li>
        <li>
          <Link to="donutsbar">
            <p>DONUTS BAR</p>
          </Link>
        </li>
        <li>
          <Link to="catalogo">
            <p>CATÁLOGO</p>
          </Link>
        </li>
        <li className={styles.btn_home}>
          <Link to="/">
            <p>INÍCIO</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
