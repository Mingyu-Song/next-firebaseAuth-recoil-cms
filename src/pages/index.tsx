import GlobalNav from 'components/nav/GlobalNav';
import PostCardList from 'components/post/PostCardList';
import { useAuth } from 'context/AuthUserContext';
import { getComments, getPosts } from 'lib/firebase/db';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await getPosts();
      setPosts(result);
    };

    getAllPosts();
  }, []);
  console.log(comments);
  return (
    <>
      <GlobalNav />
      <h2>posts</h2>
      <PostCardList posts={posts} />
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
