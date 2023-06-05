import React from 'react';
import styles from './AboutPage.module.css';
// import imgProfile from './../../assets/images/profile.jpeg'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                {/* <img src={imgProfile} alt="Mi Foto" /> */}
            </div>
            <div className={styles.description}>
                <h1>¡Hi! I'm Franco Rodriguez</h1>
                <div className={styles.card_container}>
                    <div className={styles.card}>
                        <h3>Front-end</h3>
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>VueJs</li>
                            <li>ReactJs</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Back-end</h3>
                        <ul>
                            <li>Php</li>
                            <li>Mysql</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Framework</h3>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Laravel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;
