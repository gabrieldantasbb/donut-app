import React from "react";
import styles from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className={styles.menuList}>
      <ul>
        <Link to="catalogo">
          <li>Catálogo</li>
        </Link>
        <Link to="donutsbar">
          <li>Donuts Bar</li>
        </Link>
        <Link to="foodbike">
          <li>Food Bike</li>
        </Link>
        <Link to="sobrenos">
          <li>Sobre nós</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navlinks;
