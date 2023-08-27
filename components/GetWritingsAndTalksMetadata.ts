import fs from "fs";
import matter from "gray-matter";

import { WritingsAndTalksMetadata } from "./WritingsAndTalksMetadata";

const getWritingsMetadata = () : WritingsAndTalksMetadata[] => {
    const folder = "writingsTalks/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((fn) => fn.endsWith(".md"));
  
    const posts = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`writingsTalks/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        type: matterResult.data.type,
        cover: matterResult.data.cover,
        slug: filename.replace(".md", "")
      };
    });
  
    return posts;
}

export default getWritingsMetadata;