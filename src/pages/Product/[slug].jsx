import React from 'react'
import styles from '../../styles/Donut_info.module.css'
import donut from '../../assets/donut_homer.png'

const Donut_info = () => {
  return (
<div className={styles.main}>
  <div className={styles.main_img}>
    <img src={donut} alt="donut" height={150} width={150} />
  </div>
  <div className={styles.main_content}>
    <div className={styles.content_title}>
      <h1>Donut Açúcar Caramelizado</h1>
    </div>
    <div className={styles.content_text}>
      <p></p>
    </div>
    <div className={styles.content_button}>
      <button>Fazer encomenda</button>
    </div>
  </div>
</div>
  )
}

export default Donut_info