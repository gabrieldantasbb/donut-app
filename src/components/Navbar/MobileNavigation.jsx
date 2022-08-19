import React, { useState } from 'react';
import Navlinks from "./NavLinks";
import styles from "../../styles/NavBar.module.css";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Mobilenavigation = ()=> {

    const [open, setOpen] = useState(false);

    const burgerIcon = <HiMenu className={styles.Menuicon} 
                            size='40px' 
                            color="black"
                            onClick={() => setOpen(!open)}
                        />
    const closeIcon = <IoMdClose className={styles.Menuicon} 
                        size='40px' 
                        color="black"
                        onClick={() => setOpen(!open)}
                        />
    return (
        <nav className={styles.Mobilenavigation}>
            {open ? closeIcon : burgerIcon} 
            {open && <Navlinks/>}
        </nav>
    )
}

export default Mobilenavigation;