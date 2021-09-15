import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import { forwardRef } from 'react';

export default forwardRef(function TuiEditor({ editorRef }) {
  forwardRef;
  return (
    <>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        initialValue="hello react editor world!"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
});
