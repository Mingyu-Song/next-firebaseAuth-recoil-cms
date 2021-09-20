import { useRouter } from 'next/router';
import PostCard from './PostCard';

export default function PostCardList({ posts }) {
  const router = useRouter();
  return (
    <ul>
      {posts.map((post) => {
        const { urlSlug, author } = post;
        return (
          <li onClick={() => router.push(`/@${author}/${urlSlug}`)}>
            <PostCard {...post} />
          </li>
        );
      })}
    </ul>
  );
}
