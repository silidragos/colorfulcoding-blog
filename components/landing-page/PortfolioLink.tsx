import styles from "./PortfolioLink.module.css";

export default function PortfolioLink() {
    return (
        <section className={styles.section} aria-label="3D portfolio">
            <svg className={styles.cube} viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="m24 4 18 10v20L24 44 6 34V14L24 4Z M6 14l18 10 18-10 M24 24v20" />
            </svg>
            <p>Check out our <a href="http://colorfulcoding-portofolio.s3-website.eu-central-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                3D portfolio (2020 edition)
                <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
            </a>.</p>
        </section>
    );
}
