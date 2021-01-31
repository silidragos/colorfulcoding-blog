import Logo from '../_components/logo';
import Link from 'next/link';

import styles from './header.module.scss';

export default function Header(){
    return( 
    <header className={styles.nav}>
        <span className={styles.logo}>
            <Link href="/" className={styles.link}>
                <div className={styles.link}>
                    <Logo />
                </div>
            </Link>
        </span>
        <ul>
            <li className={styles.right}>
                <Link href="/about-me">About me</Link>
            </li>
        </ul>
    </header>);
}