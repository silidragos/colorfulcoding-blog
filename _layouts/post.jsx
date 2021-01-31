import React from 'react';
import Head from 'next/head';
import DefaultLayout from '@layouts/default';

import Modal from '@components/modal';
import SubscribeComponent from '@includes/subscribe-component';

import styles from './post.module.scss';

export default class PostLayout extends React.Component {

    constructor() {
        super();

        this.state = {
            scrolled: 0,
            showedSubscriptionModal: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollProgress.bind(this));
    }

    scrollProgress() {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}`;

        // if (scrolled > 90 && !this.state.showedSubscriptionModal) {
        //     this.modal._showModal();
        //     this.setState({ showedSubscriptionModal: true });
        // }

        this.setState({
            scrolled: scrolled
        });
    }

    render() {
        let progressBarStyle = {
            width: this.state.scrolled + '%'
        };
        return (<DefaultLayout>
            <Head>
                <title>{this.props.title} | Colorful Coding</title>
                <meta name='description' content={this.props.description} />
    
                <meta property="twitter:title" content={this.props.title + " | Colorful Coding"}/>
                <meta property="twitter:description" content={this.props.description} />
                <meta property="twitter:imageUri" content={this.props.cover} />
                
                <meta property="og:title" content={this.props.title + " | Colorful Coding"}/>
                <meta property="og:description" content={this.props.description} />
                <meta property="og:image" content={this.props.cover} />
            </Head>
            <div className={styles.blog_page_component__wrapper + " wrapper"}>

                <div className={styles.blog_page_component__progress_bar} style={progressBarStyle}></div>
                <article>
                    <h1>{this.props.title}</h1>
                    <p className={styles.date}> {this.props.date} </p>
                    <h3> {this.props.description} </h3>
                    <img src={this.props.cover} alt="Cover image" />
                    <div className={styles.blog_page_body_component__wrapper} dangerouslySetInnerHTML={{ __html: this.props.content }} />
                </article>

                {/* <Modal innerContent={<SubscribeComponent />} ref={modal => (this.modal = modal)} /> */}
            </div>
            {this.props.children}
        </DefaultLayout>);
    }
}