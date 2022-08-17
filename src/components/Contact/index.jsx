import React from 'react';
import styles from '../../styles/Contact.module.css';

const Contact = (props)=> {
    return (
        <div className={styles.contact_button}>
            <a href={props.link} rel="noreferrer">{props.desc}</a>
        </div>
    )
}

export default Contact;