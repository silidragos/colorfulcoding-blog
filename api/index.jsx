import matter from 'gray-matter';
import marked from 'marked';
import yaml from 'js-yaml';

export async function getAllPosts(){
    const context = require.context('../_posts', false, /\.md$/);
    const posts = [];
    for(const key of context.keys()){
        const post = key.slice(2);
        const content = await import(`../_posts/${post}`);
        const meta = matter(content.default);
        posts.push({
            slug: post.replace('.md', ''),
            title: meta.data.title,
            cover: meta.data.cover,
            description: meta.data.description,
            date: meta.data.date
        });
    }

    posts.sort((a,b)=>{
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
    })

    return posts;
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../_posts/${slug}.md`);
    const meta = matter(fileContent.default);
    const content = meta.content;
    return{
        title: meta.data.title,
        content: content,
        cover: meta.data.cover,
        description: meta.data.description,
        date: meta.data.date
    }
}

export async function getConfig(){
    const config = await import(`../config.yml`);
    return yaml.safeLoad(config.default);
}