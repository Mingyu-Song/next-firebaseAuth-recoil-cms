import Box from 'components/box/Box';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export default function PostCard({
  author,
  createdAt,
  postTitle,
  postContent,
}) {
  const { colors } = useContext(ThemeContext);

  return (
    <Box boxShadow={`2px 3px 4px ${colors.black}`} p={3}>
      <h5>{postTitle}</h5>
      <span>
        {typeof createdAt === 'object' ? createdAt.seconds : createdAt}
      </span>
      <span>{author}</span>
      <p>{postContent}</p>
    </Box>
  );
}
