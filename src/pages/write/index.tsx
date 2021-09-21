import dynamic from 'next/dynamic';
import GlobalNav from 'components/nav/GlobalNav';
import { useCallback, useRef, useState } from 'react';
import { instance } from 'api/axios';

const TuiEditor = dynamic(() => import('components/editor/TuiEditor'), {
  ssr: false,
});

export default function Write() {
  const [postTitle, setPostTitle] = useState('');

  const postTitleHandler = useCallback((e) => {
    const { value } = e.target;
    setPostTitle(value);
  }, []);

  const editorRef = useRef(null);

  const submit = async () => {
    const editorInstance = editorRef.current?.getInstance();
    const editorToMarkdown = editorInstance?.getMarkdown();

    const result = await instance.post('/api/post/create-post', {
      postTitle,
      postContent: editorToMarkdown,
    });
  };

  return (
    <div>
      <GlobalNav />
      <input type="text" placeholder="제목" onChange={postTitleHandler} />
      <TuiEditor editorRef={editorRef} />
      <button type="submit" onClick={submit}>
        submit
      </button>
    </div>
  );
}
