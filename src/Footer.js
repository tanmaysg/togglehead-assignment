import React from "react";
import styles from "./Footer.module.css";
import facebook from "./Footer_Images/facebook.svg";
import linkedin from "./Footer_Images/linkedin.svg"; 
import instagram from "./Footer_Images/instagram.svg"; 
import twitter from "./Footer_Images/twitter.svg"; 
import youtube from "./Footer_Images/youtube.svg"; 
import quora from "./Footer_Images/quora.svg"; 
import location from "./Footer_Images/location.svg";
import timer from "./Footer_Images/timer.svg";
import train from "./Footer_Images/train.svg";


function Footer(){
    return(
        <div className={styles.container}>
                <footer>
                    <div className={styles.info}>
                        <div className={styles.content}>
                            <div className={styles.contact}>
                                <div className={styles.text}>
                                    <h1>Contact Us</h1>
                                </div>
                                <p>Address: amet, consetetur sadipscing elitr, sed diam Email id: eirmod tempor invidunt ut labore et dolore Phone no: 123456789</p>
                            </div>
                            <div className={styles.social}>
                                <div className={styles.text}>
                                    <h1>Follow Us</h1>
                                </div>
                                <div className={styles.icons}>
                                    <div className={styles.icon_link}>
                                        <img src={facebook}></img>
                                    </div>
                                    <div className={styles.icon_link}>
                                        <img src={linkedin}></img>
                                    </div>
                                    <div className={styles.icon_link}>
                                        <img src={instagram}></img>
                                    </div>
                                    <div className={styles.icon_link}>
                                        <img src={twitter}></img>
                                    </div>
                                    <div className={styles.icon_link}>
                                        <img src={youtube}></img>
                                    </div>
                                    <div className={styles.icon_link}>
                                        <img src={quora}></img>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.address}>
                                <div className={styles.text}>
                                    <h1>Head Office</h1>
                                </div>
                                <div className={styles.location}>
                                    <p><img src={location}></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                                    <p><img src={timer}></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                                    <p><img src={timer}></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                                    <p><img src={train}></img>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2021 All Rights Reserved. Privacy Policy</p>
                    </div>
                </footer>
        </div>
    )
}

export default Footer;