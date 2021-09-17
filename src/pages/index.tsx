import GlobalNav from 'components/nav/GlobalNav';
import { useAuth } from 'context/AuthUserContext';
import { getPosts } from 'lib/firebase/db';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await getPosts();
      console.log(result);
    };
    getAllPosts();
  }, []);

  return (
    <>
      <GlobalNav />
      <br />
      <br />
      <h2>posts</h2>
      {posts.map((post) => {
        const { author, createdAt, postContent, postTitle } = post;
        return (
          <>
            <h5>{postTitle}</h5>
            <span>{createdAt}</span>
            <span>{author}</span>
            <p>{postContent}</p>
          </>
        );
      })}
      <h2>user</h2>
      {JSON.stringify({ ...authUser, token: 'private' })}
      <h5>추가할 것</h5>
      <ul>
        <li>post list page</li>
        <li>post page</li>
        <li onClick={() => router.push('write')}>write page</li>
        <li>my information page</li>
      </ul>
    </>
  );
}
