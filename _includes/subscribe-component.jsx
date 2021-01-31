import styles from './subscribe.module.scss';

export default function SubscribeComponent() {

    return (
        <div className={styles.subscribe_component__wrapper + " card"}>
            <div className={styles.subscribe_component__content}>
                <h3> Join the newsletter! </h3>

                <p> Wanna hear when something new gets posted? </p>
                <form>
                    <input name='email' type="email" placeholder="Email address"/>
                    <button className="submit-but" type="submit"> Subscribe </button>
                </form>
            </div>
        </div>
    );
}