import React from 'react';

import styles from './social-share.module.scss';

export default class SocialShareComponent extends React.Component{

    render(){
        return(
            <div className={styles.social_component__wrapper}>
                <ul>
                    <li className={styles.fb_share}>
                        <a className={styles.fb_share_button} type="icon_link" 
                            // onClick={this.shareOverrideOGMeta.bind(this, this.props.info)} 
                            href="javascript: void(0)">
                            <i className="fab fa-facebook-f"/>Share</a>
                    </li>
                    <li className={styles.twitter_share}  title="Tweet this article">
                        <a className={styles.twitter_share_button} 
                        href="javascript:window.open(`https://twitter.com/intent/tweet?hashtags=colorfulCoding&url=${encodeURIComponent(window.location.href)}&via=silidragos&text=${encodeURIComponent('Is this coding or just pure fun??')}`,'Tweet about this','width=600,height=300')">
                        <i className="fab fa-twitter"/>Share
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}