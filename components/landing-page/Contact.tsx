import Image from "next/image";
import styles from "./Contact.module.css";

const socialLinks = [
    { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "https://www.linkedin.com/company/colorfulcoding/about/?viewAsMember=true" },
    { name: "YouTube", icon: "/icons/youtube.svg", href: "https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg" },
    { name: "TikTok", icon: "/icons/tiktok.svg", href: "https://www.tiktok.com/@colorfulcoding" },
];

export default function Contact() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.content}>
                <h2>Have an Idea?<br /><span>Let’s Build It Together.</span></h2>
                <p className={styles.description}>
                    Whether it’s an immersive experience, a training solution or a custom XR project,
                    <br className={styles.desktopBreak} /> we’d love to hear from you.
                </p>
                <a className={styles.contact} href="mailto:dragos@colorfulcoding.com">
                    Contact Us <span aria-hidden="true">→</span>
                </a>
                <nav className={styles.socials} aria-label="Social media">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <Image src={social.icon} alt="" width={46} height={46} />
                        </a>
                    ))}
                </nav>
                <p className={styles.credit}>Made with ♥ in Iași</p>
            </div>
        </footer>
    );
}
