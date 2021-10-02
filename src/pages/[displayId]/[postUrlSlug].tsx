import { instance } from 'api/axios';
import GlobalNav from 'components/nav/GlobalNav';
import { getPost, getComments } from 'lib/firebase/db';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const TuiViewer = dynamic(() => import('components/viewer/TuiViewer'), {
  ssr: false,
});

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
      console.log({ result });
      setComments(result);
    };

    getAllComments(postId);
  }, []);

  return (
    <>
      <GlobalNav />
      <div>{author}</div>
      <div>{postTitle}</div>
      <div>
        <TuiViewer postContent={postContent} />
      </div>
      <div>{createdAt}</div>

      <br />
      <br />
      <br />
      <input type="text" onChange={(e) => setCommentContent(e.target.value)} />
      <button type="submit" onClick={submit}>
        입력
      </button>
      {comments.map((comment) => (
        <Comment postId={postId} comment={comment} />
      ))}
    </>
  );
}

function Comment({ postId, comment }) {
  const [reply, setReply] = useState('');
  const replySubmit = async (commentId) => {
    await instance.post('/api/comment/create-comment', {
      postId,
      commentContent: reply,
      parentCommentId: commentId,
    });
  };

  return (
    <div>
      <span>author:</span>
      {comment.author}
      <span>{comment.commentContent}</span>
      <div>
        <input type="text" onChange={(e) => setReply(e.target.value)} />
        <button type="submit" onClick={() => replySubmit(comment.commentId)}>
          답글전송
        </button>
      </div>
      <div>
        {comment.childComments.map((childComment) => {
          return (
            <div style={{ margin: '0 0 0 32px' }}>
              {childComment.commentContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { displayId, postUrlSlug } = query;
  const removedAtSignFromDisplayId = displayId.slice(1);
  console.log(displayId, postUrlSlug);
  const postProps = await getPost(removedAtSignFromDisplayId, postUrlSlug);
  // const commentsProps = await getComments(postProps.postId);

  return {
    props: {
      postProps,
      //  commentsProps
    },
  };
}
