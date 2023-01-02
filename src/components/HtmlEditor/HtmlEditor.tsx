import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/ext-language_tools';

import { EditorContext } from '../../context/EditorContext';

const HtmlEditor = () => {
  const context = useContext(EditorContext);

  const handleHtmlChange = (value: string) => {
    if (context?.setHtml) {
      context.setHtml(value);
    }
  };

  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      placeholder="html"
      width="100%"
      height="100%"
      mode="html"
      theme="twilight"
      name="html-editor"
      onChange={handleHtmlChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={context?.html ?? ``}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default HtmlEditor;
