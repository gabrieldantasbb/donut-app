import React from 'react';
import styles from '../../styles/Donutbox.module.css';
import {FaPlusCircle} from 'react-icons/fa';
import donut from '../../assets/donut_homer.png'

import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Donutbox = ({ product: { image, name, slug, price } })=>{
    return (
        <div className={styles.donut_container}>
                <div className={styles.main_box}>
                    <div className={styles.image}>
                        <img 
                            src={urlFor(image && image[0])} 
                            alt={name}
                            />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}><p>{name}</p></div>
                        <div className={styles.plus}>
                            <FaPlusCircle/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Donutbox;