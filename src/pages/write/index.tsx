const Editor = dynamic(
  () => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false }
);

// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';

// import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// const codeSyntaxHighlight = dynamic(
//   () => import('@toast-ui/editor-plugin-code-syntax-highlight'),
//   { ssr: false }
// );

// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// const colorSyntax = dynamic(
//   () => import('@toast-ui/editor-plugin-color-syntax'),
//   { ssr: false }
// );

// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/toastui-editor.css';

import GlobalNav from 'components/nav/GlobalNav';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

export default function Write() {
  return (
    <div>
      <GlobalNav />
      <Editor
        previewStyle="vertical"
        initialValue="hello react editor world!"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        // plugins={[colorSyntax]}
      />
    </div>
  );
}
