import { getPost, getComments } from 'lib/firebase/db';
import { useEffect } from 'react';

export default function Post({ postProps, commentsProps }) {
  console.log(postProps, commentsProps);
  const { postId, author, postTitle, postContent, createdAt } = postProps;
  return (
    <div>
      <div>{author}</div>
      <div>{postTitle}</div>
      <div>{postContent}</div>
      <div>{createdAt}</div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { author, postUrlSlug } = query;
  const removedAtSignAuthor = author.slice(1);

  const postProps = await getPost(removedAtSignAuthor, postUrlSlug);
  const commentsProps = await getComments(postProps.postId);

  return {
    props: { postProps, commentsProps },
  };
}
