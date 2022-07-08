import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import styles from '../../styles/ArrowBack.module.css'

const ArrowBack = ()=> {
    
    const goBack = () => {
        window.history.back()
    }
    
    return (
        <>
           <button className={styles.icon_back} onClick={goBack}>
                <FaArrowLeft/>
           </button>
        </>
    )
}

export default ArrowBack;