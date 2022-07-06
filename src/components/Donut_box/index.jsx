import React from 'react';
import styles from '../../styles/Donut_box.module.css';
import {FaPlusCircle} from 'react-icons/fa';
import donut from '../../assets/donut_homer.png'


const Donutbox = (props)=>{

    return (
        <div className={styles.donut_container}>
                <div className={styles.main_box}>
                    <div className={styles.img}>
                        <img src={donut} alt='donut picture'/>
                    </div>
                    <div className={styles.title_icon}>
                        <div className={styles.title_box}><p>{props.name}</p></div>
                        <div className={styles.icon_box}>
                            <FaPlusCircle/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Donutbox;