import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { PostMetadata } from '../../components/PostMetadata';
import getPostsMetaData from '@/components/GetPostMetadata';
import PostPreview from '@/components/PostPreview';


const BlogPage = () => {
  const postsMetadata = getPostsMetaData();
  const postPreviews = postsMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  return <div className='grid grid-cols-1 gap-4 md:grid-cols-2'> {postPreviews} </div>;
};

export default BlogPage;