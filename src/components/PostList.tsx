import type Post from '../types/post.js';
import formatDate from '../lib/posts/formatDate.js';
import toDateTime from '../lib/posts/toDateTime.js';
import { MoveUpRight } from 'lucide-react';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="m-0 list-none p-0">
      {posts.map((post) => (
        <li className="grid grid-cols-[1fr_20px] gap-x-3 gap-y-2 border-b border-stone-300/15 py-6 sm:grid-cols-[150px_1fr_24px] sm:items-center sm:gap-5 sm:py-7" key={post.slug}>
          <time className="col-start-1 row-start-1 pb-2 font-mono text-[11px] text-stone-200/80" dateTime={toDateTime(post.date)}>
            {formatDate(post.date)}
          </time>
          <div className="col-start-1 row-start-2 sm:col-start-2 sm:row-start-1">
            <h2 className="m-0 text-2xl font-medium text-stone-50 sm:text-[25px]">
              <a className="no-underline text-stone-50 hover:text-amber-200" href={`posts/${post.slug}/index.html`}>
                {post.title}
              </a>
            </h2>
            <p className="mt-2 mb-0 text-base leading-relaxed text-stone-200/80">{post.summary}</p>
          </div>
          <MoveUpRight className="col-start-2 row-start-2 text-xl text-amber-200 sm:col-start-3 sm:row-start-1" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}