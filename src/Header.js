import React from "react";
import styles from "./Header.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import search from "./search.png";

function Header(){
    return(
        <div className={styles.content}>
            <header>
                <div className={styles.navbar}>
                    <ul className={styles.navlist}>
                        <li className={styles.navitem}>About Us</li>
                        <li className={styles.navitem}>Lorem Ipsum</li>
                        <li className={styles.navitem}>Lorem Ipsum</li>
                        <li className={styles.navitem}>Lorem Ipsum</li>
                        <li className={styles.navitem}>Newsroom</li>
                        <li className={styles.navitem}>Press Releases</li>
                        <li className={styles.navitem}>Lorem Ipsum</li>
                        <li className={styles.navitem}>Privacy Policy</li>
                        <li className={styles.navitem}>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.info}>
                        <div className={styles.logo}>
                            <h1>LOGO</h1>
                        </div>
                        <div className={styles.menu}>
                            <ul className={styles.menulist}>
                                <li className={styles.menuitem}>Qualification<MdOutlineKeyboardArrowDown/></li>
                                <li className={styles.menuitem}>Organizations<MdOutlineKeyboardArrowDown/></li>
                                <li className={styles.menuitem}>Research & Analysis<MdOutlineKeyboardArrowDown/></li>
                                <li className={styles.menuitem}>Lorem Ipsum<MdOutlineKeyboardArrowDown/></li>
                                <li className={styles.menuitem}>Lorem Ipsum<MdOutlineKeyboardArrowDown/></li>
                            </ul>
                            <div className={styles.search}>
                                <img src={search}></img>
                            </div>
                            <div className={styles.enroll}>
                                <button class={styles.enrollbutton}>Enrolment</button>
                            </div>
                        </div>
                </div>
            </header>

        </div>
    )
}

export default Header;