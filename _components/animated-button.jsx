import styles from './animated-button.module.scss';

export default function AnimatedButton() {
    return (
        <div className={styles.wrapper}>
            <button class="button" onClick={()=>{window.open("https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg",'_blank');}}>Youtube Channel!</button>
        </div>
    );
}