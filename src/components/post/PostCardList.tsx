import { useRouter } from 'next/router';
import PostCard from './PostCard';

export default function PostCardList({ posts }) {
  const router = useRouter();
  return (
    <ul>
      {posts.map((post) => {
        const { postId, author } = post;
        return (
          <li onClick={() => router.push(`/post/@${author}/${postId}`)}>
            <PostCard {...post} />
          </li>
        );
      })}
    </ul>
  );
}
