import Box from 'components/box/Box';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PostCard from './PostCard';

export default function PostCardList({ posts }) {
  const router = useRouter();
  return (
    <PostCardListBox>
      {posts.map((post) => {
        const { urlSlug, displayId } = post;
        return (
          <PostCardListItem
            width={[1, 1, 1 / 2, 1 / 3, 1 / 4, 1 / 4]}
            onClick={() => router.push(`/@${displayId}/${urlSlug}`)}
          >
            <PostCard {...post} />
          </PostCardListItem>
        );
      })}
    </PostCardListBox>
  );
}

const PostCardListBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  justify-content: flex-start;
`;

const PostCardListItem = styled(Box)``;
