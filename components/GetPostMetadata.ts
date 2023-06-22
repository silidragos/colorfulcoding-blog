import fs from "fs";
import matter from "gray-matter";

import { PostMetadata } from "./PostMetadata";

const getPostsMetaData = () : PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((fn) => fn.endsWith(".md"));
  
    const posts = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: filename.replace(".md", "")
      };
    });
  
    return posts;
}

export default getPostsMetaData;