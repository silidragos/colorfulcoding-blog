import PostLayout from '@layouts/post';
import {getPostBySlug, getAllPosts} from '@api';

export default function Post(props){
    console.log("Props", props);
    return <PostLayout title={props.title} content={props.content} cover={props.cover} date={props.date} description={props.description}>
    </PostLayout>
}

export async function getStaticProps(context){
    return{
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getAllPosts();
    paths = paths.map(post => ({
        params: {slug: post.slug}
    }));
    return {
        paths: paths,
        fallback: false
    }
}