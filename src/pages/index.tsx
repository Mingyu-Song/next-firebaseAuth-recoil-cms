import Box from 'components/box/Box';
import GlobalNav from 'components/nav/GlobalNav';
import PostCardList from 'components/post/PostCardList';
import { useAuth } from 'context/AuthUserContext';
import { getComments, getPosts } from 'lib/firebase/db';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await getPosts();
      console.log({ result });
      setPosts(result);
    };

    getAllPosts();
  }, []);
  return (
    <>
      <GlobalNav />
      <PostCardListBox as="main" width={['100%', '100%', 1, 2, 3, 3]} mx="auto">
        <PostCardList posts={posts} />
      </PostCardListBox>
      <h2>user</h2>
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

const PostCardListBox = styled(Box)``;
