import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostsMetaData from '@/components/GetPostMetadata';

const getPostsContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}


export const generateStaticParams = async () => {
    const posts = getPostsMetaData();
    return posts.map((post) => ({
        slug: post.slug
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostsContent(slug);

    return (
        <div>
            <h1 className='text-2xl text-violet-600'>{post.data.title}</h1>
            <article className='prose lg:prose-xl'>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
}

export default PostPage;