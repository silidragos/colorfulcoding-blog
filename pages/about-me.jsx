import DefaultLayout from '@layouts/default';
import { getConfig, getAllPosts } from '@api';
import Head from 'next/head';
import styles from './about-me.module.scss';

export default function AboutMe(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <Head>
                <meta property="og:title" content={"About me | Colorful Coding"} />
                <meta property="og:description" content={"Bio & Portofolio"} />
                <meta property="og:image" content={"/images/6/scene_vrme.png.png"} />
            </Head>

            <div className={styles.about_me__wrapper}>
                <div className={styles.avatar_image + " card"}>
                    <img src='/images/me.jpg'></img>
                </div>
                <div className={styles.bio}>
                    <div>
                        <div className={styles.bio_main}>
                            Developer doing Freelance work, mostly by building AR/VR and 3D experiences. I love the mix of Artistic Creativity and Technical Challenges this area has to offer.
                        </div>
                        <div className={styles.technologies}>Unity, AFrame, ThreeJS, SparkAR, React, Blender</div>
                    </div>
                </div>
                <div className={styles.extra_info}>
                    Ask me about <a href="#artlink">ArtLink</a>, <a href="#vrmeetups">VRMeetups</a>,  <a href="https://profs.info.uaic.ro/~adiftene/Scoala/2021/IMR/" target="_blank">AR/VR Education</a> or <a href="https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg" target="_blank">Youtube</a>!
                </div>
                <div className={styles.social_media}>
                    <a href="https://www.linkedin.com/in/drago%C8%99-silion-a01160100/" target="_blank"><img src="./icons/linkedin.png"></img></a>
                    <a href="https://twitter.com/silidragos" target="_blank"><img src="./icons/twitter.png"></img></a>
                    <a href="https://github.com/silidragos" target="_blank"><img src="./icons/github.png"></img></a>
                    <a href="https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg" target="_blank"><img src="./icons/youtube.png"></img></a>
                    <a href="mailto:dragos@colorfulcoding.com" target="_blank"><img src="./icons/email.png"></img></a>
                </div>

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
                                    <a href="mailto:dragos@colorfulcoding.com">Contact us for more details</a>
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
                                <h2>Spark AR Filters</h2>
                                <p>All kinds of Instagram/Facebook face filters, mostly with promotional purpose.</p>
                                <br /><br />
                            </div>
                        </div>
                        <img className={styles.portofolio_scene} src="./images/projects/scene_spark.png"></img>
                        <img className={styles.portofolio_character + " " + styles.square} src="./images/projects/character_spark.png"></img>
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
                                    <a href="https://www.muzeulbrailei.ro/evenimente/calatorie-3d-in-portul-brailei-de-la-inceputul-secolului-al-xx-lea-prin-intermediul-tehnologiei-digitale-transpusa-pe-suport-oculus-vr-la-sediul-muzeului-brailei-carol-i-sec-ia-istorie/" target="_blank">Related Link</a>
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
                                    Art Festival app, having the options of seeing AR art Galleries at the location by scanning markers and taking them at home by <br />scanning beer bottles bought there.
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
                                    <br />
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
        </DefaultLayout >
    );
}

export async function getStaticProps() {
    const config = await getConfig();
    return {
        props: {
            title: "About",
            description: config.description
        }
    }
}