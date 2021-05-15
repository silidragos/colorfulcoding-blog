import DefaultLayout from '@layouts/default';
import Link from 'next/link';
import { getConfig, getAllPosts } from '@api';

import Logo from '@components/logo';
import AnimatedButton from '@components/animated-button';

import styles from './index.module.scss';
import tallCardStyle from './tall-card.module.scss';

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <div className={styles.big_header__wrapper}>
                <div className={styles.big_header}>
                    <h1>
                        <div className={styles.logo}><Logo /></div>
                    </h1>
                    <h3> A warm place with Augmented and Virtual Realty, Web, Servers and general opinions </h3>
                </div>
                <div className={styles.overlay + " overlay"}></div>
            </div>

            {/* <p>List of posts:</p>
            <ul>
                {props.posts.map((post, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={'/blog/' + post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul> */}

            <div className={styles.main_body}>
                <div className={styles.last_updates__wrapper}>
                    <AnimatedButton></AnimatedButton>
                    <h1>Blog</h1>
                    <div>
                        {props.posts.map((post) => { return GetCard(post); })}
                    </div>
                </div>
                {/* <aside>
                    <SubscribeComponent />
                </aside> */}
            </div>
        </DefaultLayout>
    );
}

export async function getStaticProps() {
    const config = await getConfig();
    const allPosts = await getAllPosts();
    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}

function GetCard(post) {
    console.log(post);

    var style = {
        backgroundImage: 'url(' + post.cover + ')'
    };

    return (
        <div className={tallCardStyle.tall_card__wrapper + " card"} key={post.slug}>
            <div className={tallCardStyle.tall_card__title} style={style}>
                <Link href={"/blog/" + post.slug}><div className={tallCardStyle.overlay}><img src="/images/icon/read-icon.png"/></div></Link>
            </div>
            <div className={tallCardStyle.tall_card__desc}>
                <h2> {post.title} </h2>
                <p className={tallCardStyle.date}> {post.date} </p>
                <p> {post.description} <Link href={"/blog/" + post.slug}>Read More</Link></p>
            </div>
        </div>
    );
}