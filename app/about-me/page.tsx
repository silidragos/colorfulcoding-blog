import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getAboutMeContent = () => {
    const file = "content/about-me.md";
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export default function AboutMePage() {
    const aboutMe = getAboutMeContent();

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <article className="prose prose-lg max-w-none text-white prose-headings:text-white prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-white prose-li:my-0 prose-ul:my-1 prose-ol:my-1">
                <Markdown>{aboutMe.content}</Markdown>
            </article>
        </div>
    );
}
