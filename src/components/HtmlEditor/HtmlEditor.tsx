import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/ext-language_tools';

const HtmlEditor = () => {
  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      placeholder="html"
      width="100%"
      mode="html"
      theme="twilight"
      name="html-editor"
      onLoad={() => console.log('load')}
      onChange={() => console.log('change')}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={``}
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
