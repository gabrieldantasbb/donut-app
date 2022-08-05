import React from 'react';
import styles from "../../styles/NavBar.module.css"
import Mobilenavigation from "./Mobilenavigation";
import Navigation from "./Navigation";


const Navbar = ()=> {
    return (
        <nav className={styles.Navbar}>
            <Mobilenavigation/>
            <Navigation/>
        </nav>
    )
}

export default Navbar;