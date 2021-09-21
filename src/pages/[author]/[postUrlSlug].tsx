import { instance } from 'api/axios';
import { getPost, getComments } from 'lib/firebase/db';
import { useEffect, useState } from 'react';

export default function Post({ postProps, commentsProps }) {
  console.log(postProps, commentsProps);
  const { postId, author, postTitle, postContent, createdAt } = postProps;
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState('');
  const submit = async () => {
    await instance.post('/api/comment/create-comment', {
      postId,
      commentContent,
    });
  };
  useEffect(() => {
    const getAllComments = async (postId) => {
      const result = await getComments(postId);
      setComments(result);
    };

    getAllComments(postId);
  }, []);

  return (
    <div>
      <div>{author}</div>
      <div>{postTitle}</div>
      <div>{postContent}</div>
      <div>{createdAt}</div>
      <br />
      <br />
      <br />
      <input type="text" onChange={(e) => setCommentContent(e.target.value)} />
      <button type="submit" onClick={submit}>
        입력
      </button>
      {comments.map((comment) => {
        const [reply, setReply] = useState('');
        const replySubmit = () => {};
        return (
          <div>
            <span>author:</span>
            {author}
            <span>{comment.commentContent}</span>
            <input type="text" onChange={(e) => setReply(e.target.value)} />
            <button type="submit" onClick={replySubmit}>
              답글전송
            </button>
          </div>
        );
      })}
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
