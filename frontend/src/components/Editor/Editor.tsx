import { FC } from 'react';
import { Editor as MonacoEditor, type OnChange } from '@monaco-editor/react';
export const Editor: FC<{
  language: string;
  content: string;
  handleContentChange: OnChange;
}> = ({ language = 'html', content = '', handleContentChange = () => {} }) => {
  return (
    <MonacoEditor
      className="editor"
      width="60vw"
      height="50vh"
      language={language}
      // value={['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n')}
      value={content}
      onChange={handleContentChange}
      // theme="vs-dark"
    />
  );
};
