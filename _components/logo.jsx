import styles from './logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logo_wrapper}>
            <span className='colorful'>
                Colorful
            </span>
            <span className={styles.coding}>
                <span className={styles.underline}>_</span> Coding </span>
        </div>
    );
}