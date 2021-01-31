import DefaultLayout from '@layouts/default';

import styles from './about-me.module.scss';

export default function AboutMe(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>

            <div className={styles.about_me__wrapper}>
                <div className={styles.avatar_image + " card"}>
                    <img src='/images/me.jpg'></img>
                </div>
                <h1>
                    <span className="colorful">About</span> me
                        </h1>
                <div className={styles.bio}>
                    <ul>
                        <li><b>Creative Dev</b> doing Freelance work, mostly by building AR/VR and 3D experiences. My weapons of choice are <b>Unity</b> and <b>AFrame+ThreeJS</b>. Also familiar with React, Java Spring, a bit of Cloud.</li>
                        <li>Cofounder of <a href="#artlink">ArtLink</a> and <a href="#vrmeetups">VRMeetups</a></li>
                        <li>Having the awesome chance of being a laboratory teacher for <a href="https://profs.info.uaic.ro/~adiftene/Scoala/2021/IMR/" target="_blank">Introduction to Mixed Reality</a> at UAIC's Computer Science Faculty in Iași</li>
                        <li>Occasionally creating content here, on the blog, and on my <a href="https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg" target="_blank">Youtube Channel</a></li>
                    </ul>
                    <hr />
                    <ul>
                        <li>You can find more about me on <a href="https://www.linkedin.com/in/drago%C8%99-silion-a01160100/" target="_blank">LinkedIn</a> or by connecting on <a href="https://twitter.com/silidragos" target="_blank">Twitter</a></li>
                        <li>You can also checkout my <a href="https://github.com/silidragos" target="_blank">Github</a></li>
                        <li>Or email me on: <a href="mailto:dragos@colorfulcoding.com">dragos@colorfulcoding.com</a></li>
                    </ul>
                </div>
                <h1>
                    <span className="colorful">Past and Current</span>  Works</h1>

                <div className={styles.portofolio_wrapper}>
                    <div className={styles.portofolio_element} id="artlink">
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Cofounder ArtLink (present)</h2>
                                <p>
                                    Bring Art Galleries to everyone's home through Augmented Reality
                                    <br /><br />
                                    <a href="https://artlink.app" target="_blank">Landing Page</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_artlink.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_artlink.png"></img>
                    </div>

                    <div className={styles.portofolio_element} id="vrmeetups">
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Founder VRMeetups (present)</h2>
                                <p>
                                    Multiplayer technology for VR, Desktop and Mobile that facilitates bringing people together through technology.
                                    <br /><br />
                                    {/* <a href="">Landing Page</a> */}
                                    <a href="mailto:dragos@colorfulcoding.com">Contact me for more details</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_vrme.png"></img>
                        <img className={styles.portofolio_character} src="./images/projects/character_vrme.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Creator InsidAR(standby)</h2>
                                <p>ARFoundation. OpenCV Backend</p>
                                <p>
                                    Indoor Localization Technology System based on my Master Thesis and many Science Papers read and cropped together the best I could.
                                    <br />
                                    Worked to some extent but never managed to make it production ready.
                                    <br /><br />
                                    <a href="https://www.youtube.com/watch?v=iWmUkptzIBs&ab_channel=ColorfulCoding" target="_blank">Video Demo</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_insidar.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_insidar.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Braila Harbor 1920 VR (2020)</h2>
                                <p>Technical Implementation, as part of Vreestory Team<br />
                                Unity. Oculus Quest</p>
                                <p>
                                    Historical recreation of Braila's Harbor, present in Braila's Museum.
                                    <br /><br />
                                    <a href="" target="_blank">Vreestory Link</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_braila.png"></img>
                        <img className={styles.portofolio_character} src="./images/projects/character_braila.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>KFC Smarket(2020)</h2>
                                <p>
                                    WebVR Marketing Campaign
                                    <br />Technical Implementation, as part of Alice Labs Team<br />
                                    PlayCanvas / JS
                                    <br /><br />
                                    <a href="https://www.youtube.com/watch?v=DZ-9Ju1CABA&ab_channel=NOOBZ" target="_blank">Video Demo</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_kfc.png"></img>
                        <img className={styles.portofolio_character} src="./images/projects/character_kfc.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Office Fire Safety Simulator (2019)</h2>
                                <p>Technical Implementation, as part of Vreestory Team<br />
                                Unity. Oculus Quest. Lenovo Mirage Solo</p>
                                <p>
                                    VR Simulator for training employees in case of fire emergency.
                                <br /><br />
                                    <a href="" target="_blank">Vreestory Link</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_fire.png"></img>
                        <img className={styles.portofolio_character} src="./images/projects/character_fire.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Government of Children Landing Page (2019)</h2>
                                <p>Technical Implementation<br />
                                    Web. Javascript</p>
                                <p>
                                    Landing page of the Documentary "Government of Children". Has the option for children<br /> to upload their own content on the <br />website.
                                <br /><br />
                                    <a href="https://www.governmentofchildren.com/ro/" target="_blank">Website</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_goc.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_goc.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Rocanotherworld Iasi Festival App (2019)</h2>
                                <p>Part of developement team<br />
                                Unity. Vuforia.</p>
                                <p>
                                    Festival app, including time schedule and of course, AR experiences when scanning the logo on T-shirts or public banners.
                                <br /><br />
                                    <a href="https://play.google.com/store/apps/details?id=com.rocanotherworld.rocanotherworld" target="_blank">Website</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_roca.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_roca.png"></img>
                    </div>

                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>ArtFactory Bucharest Festival App (2018)</h2>
                                <p>Technical Implementation<br />
                                Unity. Vuforia.</p>
                                <p>
                                    Art Festival app, having the options of seeing AR art Galleries at the location by scanning markers and taking them at home by <br/>scanning beer bottles bought there.
                                <br /><br />
                                    <a href="" target="_blank">Festival Link</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_artfactory.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_artfactory.png"></img>
                    </div>
                    
                    <div className={styles.portofolio_element}>
                        <div className={styles.overlay}>
                            <img src="./images/projects/overlay.png"></img>

                            <div className={styles.description}>
                                <h2>Werit (2016-2018)</h2>
                                <p>Cofounder<br />
                                Angular. Java Spring. Machine Learning.</p>
                                <p>
                                    Website that recommended outfits using machine learning algorithms, from most Romanian clothing shops. 
                                    <br/>
                                    Won Innovation Labs 2017 Final Best Presentation Prize.
                                <br /><br />
                                    <a href="" target="_blank">Demo Video</a>
                                </p>
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_werit.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_werit.png"></img>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}