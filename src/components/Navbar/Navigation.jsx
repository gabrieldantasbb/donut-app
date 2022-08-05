import React from 'react';
import Navlinks from "./NavLinks";
import styles from "../../styles/NavBar.module.css";

const Navigation = ()=> {
    return (
        <nav className={styles.Navigation}>
            <Navlinks/>
        </nav>
    )
}

export default Navigation;