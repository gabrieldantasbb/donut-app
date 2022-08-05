import React from 'react';
import styles from "../../styles/NavBar.module.css";

const Navlinks = () => {
  return (
    <div className={styles.menuList}>
      <ul>
        <li>
            <p>Home</p>
        </li>
        <li>
            <p>Catálogo</p>
        </li>
        <li>
            <p>Donuts bar</p>
        </li>
        <li>
            <p>Food Bike</p>
        </li>
        <li>
            <p>Sobre nós</p>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;