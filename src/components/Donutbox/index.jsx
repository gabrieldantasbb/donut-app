import React from 'react';
import styles from '../../styles/Donutbox.module.css';
import {FaPlusCircle} from 'react-icons/fa';
import donut from '../../assets/donut_homer.png'


const Donutbox = (props)=>{

    return (
        <div className={styles.donut_container}>
                <div className={styles.main_box}>
                    <div className={styles.image}>
                        <img src={donut} alt='donut'/>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}><p>{props.name}</p></div>
                        <div className={styles.plus}>
                            <FaPlusCircle/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Donutbox;