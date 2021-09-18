import PostCard from './PostCard';

export default function PostCardList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
