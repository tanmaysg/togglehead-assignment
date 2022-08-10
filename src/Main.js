import React from "react";
import styles from "./Main.module.css";
import forward_arw from "./Main_Images/forward_arw.png";
import backward_arw from "./Main_Images/backward_arw.png";
import calendar from "./Main_Images/event.png"
import product1 from "./Main_Images/product_1.png";
import product2 from "./Main_Images/product_2.png";
import product3 from "./Main_Images/product_3.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ImPlay3 } from "react-icons/im"; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import newsletter_left_1 from "./Main_Images/newsletter_left-1.png";
import newsletter_left_2 from "./Main_Images/newsletter_left-2.png";
import newsletter_left_3 from "./Main_Images/newsletter_left-3.png";
import subcriptionbg from "./Main_Images/subscription_bg.png";

function Main(){
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                    <div className={styles.text}>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                        <button className={styles.knowmore}>Know More<ImPlay3/></button>
                    </div>
            </div>

            <div className={styles.link_section}>
                    <div className={`${styles.links} ${styles.links_1}`}>
                        <div className={styles.links_content}>
                            <div className={styles.title}>
                                <h3>Quick Links<MdOutlineKeyboardArrowRight/></h3>
                                <h5>Lorem Ipsum</h5>
                                <div className={styles.link_path}>
                                    <div className={styles.link_group}>
                                        <p>Level 1</p>
                                        <p>Level 3</p>
                                    </div>
                                    <div className={styles.link_group}>
                                        <p>Level 2</p>
                                        <p>Enquiry</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className={`${styles.links} ${styles.links_2}`}>
                    <div className={styles.links_content}>
                            <div className={styles.title}>
                                <h5>Lorem Ipsum</h5>
                                <div className={styles.link_path}>
                                    <div className={styles.link_group}>
                                        <p>Level 1</p>
                                        <p>Level 3</p>
                                    </div>
                                    <div className={styles.link_group}>
                                        <p>Level 2</p>
                                        <p>Enquiry</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className={`${styles.links} ${styles.links_3}`}>
                    <div className={styles.links_content}>
                            <div className={styles.title}>
                                <h5>Lorem Ipsum</h5>
                                <div className={styles.link_path}>
                                    <div className={styles.link_group}>
                                        <p>Level 1</p>
                                        <p>Level 3</p>
                                    </div>
                                    <div className={styles.link_group}>
                                        <p>Level 2</p>
                                        <p>Enquiry</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
            </div>

            <div className={styles.examination}>
                <div className={styles.exam_content}>
                        <div className={styles.details}>
                            <div className={styles.title}>
                                <h1>Upcoming Examinations</h1>
                                <p>Enquire about the examination & register for the exams</p>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.exam}>
                                <div className={styles.image}>
                                    <img src={calendar}></img>
                                </div>
                                <div className={styles.text}>
                                    <h3>02th October 2014</h3>
                                    <p>Level 1 exam</p>
                                </div>
                            </div>
                            <div className={styles.exam}>
                                <div className={styles.image}>
                                    <img src={calendar}></img>
                                </div>
                                <div className={styles.text}>
                                    <h3>Nov-Dec 2016</h3>
                                    <p>Level 2</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>

                            <div className={styles.exam}>
                                <div className={styles.image}>
                                    <img src={calendar}></img>
                                </div>
                                <div className={styles.text}>
                                    <h3>Ongoing this year</h3>
                                    <p>Level 3 (Grad)</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.exam_info}>
                                <div className={styles.info}>
                                    <div className={styles.info_text}>
                                        <h2>Lorem ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                        <span>Know More<IoIosArrowDroprightCircle/></span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.info_text}>
                                        <h2>Lorem ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                        <span>Know More<IoIosArrowDroprightCircle/></span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.info_text}>
                                        <h2>Lorem ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                        <span>Know More<IoIosArrowDroprightCircle/></span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.info_text}>
                                        <h2>Lorem ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                        <span>Know More<IoIosArrowDroprightCircle/></span>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div class={styles.stats_content}>
                    <div className={styles.text}>
                        <h4>Lorem ipsum</h4>
                        <h1>123+</h1>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    </div>
                    <div className={styles.text}>
                        <h4>Lorem ipsum</h4>
                        <h1>12+</h1>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                    </div>
                    <div className={styles.text}>
                        <h4>Lorem ipsum</h4>
                        <h1>12+</h1>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                    </div>
                    <div className={styles.text}>
                        <h4>Lorem ipsum</h4>
                        <h1>123</h1>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    </div>
                </div>
            </div>

            <div className={styles.schedule}>
                <div className={styles.schedule_content}>
                    <div className={styles.event_list}>
                        <div className={styles.event}>
                            <p>January 20, 2011</p>
                            <h2>Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className={styles.event}>
                            <p>April 31, 2015</p>
                            <h2>Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className={styles.event}>
                            <p>December 21, 2010</p>
                            <h2>Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <div className={`${styles.left} ${styles.control}`}>
                            <img src={backward_arw}></img>
                        </div>
                        <div className={`${styles.right} ${styles.control}`}>
                            <img src={forward_arw}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.products}>
                <div className={styles.produts_content}>
                    <div className={styles.product}>
                        <img src={product1}></img>
                        <div className={styles.text}>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
                            <p>Know More</p>
                        </div>
                        <div className={styles.sticker}>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <img src={product2}></img>
                        <div className={styles.text}>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
                            <p>Know More</p>
                        </div>
                        <div className={styles.sticker}>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <img src={product3}></img>
                        <div className={styles.text}>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
                            <p>Know More</p>
                        </div>
                        <div className={styles.sticker}>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.newsletter}>
                <div className={styles.newsletter_content}>

                    <div className={`${styles.left_section} ${styles.section}`}>
                        <div className={styles.section_content}>
                            <div className={styles.image}>
                                <img src={newsletter_left_1}></img>
                            </div>
                            <div className={styles.info}>
                                <h3>Quote of the month</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                            </div>
                        </div>

                        <div className={styles.separate}></div>

                        <div className={styles.section_content}>
                            <div className={styles.image}>
                                <img src={newsletter_left_2}></img>
                            </div>
                            <div className={styles.info}>
                                <h3>Hiring this month</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                            </div>
                        </div>

                        <div className={styles.separate}></div>

                        <div className={styles.section_content}>
                            <div className={styles.image}>
                                <img src={newsletter_left_3}></img>
                            </div>
                            <div className={styles.info}>
                                <h3>Video of the month</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.right_section} ${styles.section}`}>
                        <div className={styles.section_content}>
                            <div className={styles.events}>
                                <div class={styles.upcoming_event}>
                                    <div className={styles.date}>
                                        <div className={styles.day}>
                                            <h2>19</h2>
                                            <h3>Mar</h3>
                                        </div>
                                        <div className={styles.year}>
                                            <h2>2021</h2>
                                        </div>
                                        <div class={styles.circle1}></div>
                                        <div class={styles.circle2}></div>
                                    </div>
                                    <div className={styles.upcoming_event_info}>
                                        <h3>Lorem Ipsum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
                                        <h5>07:00 - 10:00 (March 20, 2021)</h5>
                                        <span>Register Now</span>
                                    </div>
                                </div>
                                <div class={styles.upcoming_event}>
                                    <div className={styles.date}>
                                        <div className={styles.day}>
                                            <h2>19</h2>
                                            <h3>Mar</h3>
                                        </div>
                                        <div className={styles.year}>
                                            <h2>2021</h2>
                                        </div>
                                        <div class={styles.circle1}></div>
                                        <div class={styles.circle2}></div>
                                    </div>
                                    <div className={styles.upcoming_event_info}>
                                        <h3>Lorem Ipsum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
                                        <h5>07:00 - 10:00 (March 20, 2021)</h5>
                                        <span>Register Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.subscription}>
                <div className={styles.subscription_content}>
                    <div className={styles.text}>
                        <h1>Subscribe</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    </div>
                    <div className={styles.email}>
                        <input type="text" placeholder="Enter your Email Address"></input>
                        <button><p>Subscribe Now</p><ImPlay3/></button>
                    </div>
                    <div className={styles.bgimg}>
                        <img src={subcriptionbg}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;