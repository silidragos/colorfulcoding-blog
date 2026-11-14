import Image from "next/image";
import styles from "./Platforms.module.css";

const platforms = [
    {
        name: "ArtLink",
        category: "Art & Culture",
        tagline: "Art beyond physical boundaries.",
        description: "An augmented reality platform connecting art, places, and audiences through interactive exhibitions and spatial experiences.",
        image: "/parallaxCards/artlink_bg.jpg",
        href: "https://artlink.app/",
    },
    {
        name: "PractiMentor",
        category: "Training & Simulation",
        tagline: "Learn by doing. Anywhere.",
        description: "An immersive training platform for creating, delivering, and managing interactive learning experiences across VR, desktop, and web.",
        image: "/article-images/practimentor.png",
        href: "https://www.practimentor.com/",
        fundingHref: "/practimentor-about",
    },
];

export default function Platforms() {
    return (
        <section className={styles.section} aria-labelledby="platforms-heading">
            <header className={styles.header}>
                <div>
                    <p className={styles.eyebrow}>Built by ColorfulCoding</p>
                    <h2 id="platforms-heading">Our <span>Platforms</span></h2>
                </div>
                <p>Our in-house platforms for art, culture, and immersive learning.</p>
            </header>
            <div className={styles.grid}>
                {platforms.map((platform) => (
                    <article className={styles.card} key={platform.name}>
                        <Image src={platform.image} alt="" fill sizes="(max-width: 760px) 91vw, 45vw" className={styles.image} />
                        <div className={styles.content}>
                            <h3>{platform.name}</h3>
                            <p className={styles.category}>{platform.category}</p>
                            <p className={styles.tagline}>{platform.tagline}</p>
                            <p className={styles.description}>{platform.description}</p>
                            <div className={styles.actions}>
                                <a href={platform.href} target="_blank" rel="noopener noreferrer">
                                    Explore {platform.name}<span aria-hidden="true">→</span>
                                </a>
                                {platform.fundingHref && (
                                    <a className={styles.secondary} href={platform.fundingHref}>
                                        Funding details
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
