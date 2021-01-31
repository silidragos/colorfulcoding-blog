import Head from 'next/head';
import Header from '@includes/header';

export default function DefaultLayout(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name='description' content={props.description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="shortcut icon" href="./images/favicon.png"></link>

                <meta property="fb:app_id" content="1630777937002466"/> 
                <meta property="og:url" content="https://www.colorfulcoding.com"/>
                <meta property="og:type" content="website"/>	

                <meta property="twitter:title" content="Colorful Coding"/>
                <meta property="twitter:description" content={props.description} />
                <meta property="twitter:imageUri" content='/images/bg_2.png' />
                
                <meta property="og:title" content={props.title + " | Colorful Coding"}/>
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content='/images/bg_2.png' />

                <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
            </Head>
            <Header />
            {props.children}
        </main>
    );
}