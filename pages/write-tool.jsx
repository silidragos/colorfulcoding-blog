import React from 'react';
import DefaultLayout from '@layouts/default';

import { getConfig } from '@api';

import styles from './write-tool.module.scss';
import postStyles from "@layouts/post.module.scss";

const SAVED_CONTENT_KEY = "write-tool__saved-text";

export default class WriteToolPage extends React.Component {

    constructor(props) {
        super();

        this.state = {
            textboxContent: "",
            content: ""
        };
    }

    componentDidMount() {
        let defaultContent = "<h3> Test Content </h3>"
        const savedContent = localStorage.getItem(SAVED_CONTENT_KEY);
        if (savedContent) {
            defaultContent = savedContent;
        }
        this.setState({
            textboxContent: defaultContent,
            content: defaultContent
        })
    }

    textAreaChangeHandle(event) {
        this.setState({ textboxContent: event.target.value });
    }

    setContent() {
        this.setState({ content: this.state.textboxContent });

        localStorage.setItem(SAVED_CONTENT_KEY, this.state.content);
    }

    render() {
        return (
            <DefaultLayout title={this.props.title} description={this.props.description}>
                <div className={styles.write_tool__wrapper}>
                    <h1> Blog writing tool</h1>
                    <p> Useful tips:
            <br />
            Special elements: h1, h3, blockquote, hr, a
            <br />
            Special classes: p.call-to-action, div.code-wrapper pre code,
            <br />
            Special ids: "subscription_call_to_action"
            </p>
                    <textarea value={this.state.textboxContent} onChange={this.textAreaChangeHandle.bind(this)}></textarea>
                    <button onClick={this.setContent.bind(this)}>Visualize </button>
                    <div className={postStyles.blog_page_body_component__wrapper} dangerouslySetInnerHTML={{ __html: this.state.content }} />
                </div>
            </DefaultLayout>
        );
    }
}


export async function getStaticProps() {
    const config = await getConfig();
    return {
        props: {
            title: config.title,
            description: config.description
        }
    }
}