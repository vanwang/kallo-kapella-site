import { allBlogPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { BlogPostList } from "@/components/blog-post";

export default function Blog() {
  const posts = allBlogPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="w-full lg:px-16 mt-12">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">大事记</h1>
        <h5 className="text-default-500 text-lg">关于KĀPELLA的最新消息</h5>
      </div>
      <BlogPostList posts={posts} />
    </div>
  );
}
