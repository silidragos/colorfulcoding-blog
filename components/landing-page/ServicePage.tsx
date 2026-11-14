import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ServicePage.module.css";

export default function ServicePage({ children }: { children: ReactNode }) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <a href="/" aria-label="ColorfulCoding home">
                    <Image src="/icons/icon_large.svg" alt="ColorfulCoding" width={194} height={33} />
                </a>
                <nav aria-label="Page navigation">
                    <a href="/#projects">Selected Work</a>
                    <a className={styles.contact} href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
                </nav>
            </header>
            <main className={styles.article}>{children}</main>
        </div>
    );
}
