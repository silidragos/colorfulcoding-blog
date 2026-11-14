"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "@/app/studio-hero.module.css";

export default function StudioHeader() {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    return (
        <header className={styles.header} onKeyDown={(event) => {
            if (event.key === "Escape" && open) {
                setOpen(false);
                toggle.current?.focus();
            }
        }}>
            <a href="#home" aria-label="ColorfulCoding home"><Image src="/icons/icon_large.svg" alt="ColorfulCoding" width={194} height={33} /></a>
            <button ref={toggle} className={styles.menuToggle} aria-expanded={open} aria-controls="studio-navigation" onClick={() => setOpen(!open)}>
                {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span>
            </button>
            <nav id="studio-navigation" aria-label="Main navigation" data-open={open} onClick={() => setOpen(false)}>
                <a href="#home">About</a><a href="#services">Services</a><a href="#projects">Selected Work</a><a href="#team">Team</a><a href="#contact">Contact Us <span aria-hidden="true">↗</span></a>
            </nav>
        </header>
    );
}
