import dynamic from 'next/dynamic';
import GlobalNav from 'components/nav/GlobalNav';
import { useRef } from 'react';

const TuiEditor = dynamic(() => import('components/editor/TuiEditor'), {
  ssr: false,
});

export default function Write() {
  const editorRef = useRef();

  return (
    <div>
      <GlobalNav />
      <input type="text" placeholder="제목" />
      <TuiEditor editorRef={editorRef} />
      <button type="submit"></button>
    </div>
  );
}
