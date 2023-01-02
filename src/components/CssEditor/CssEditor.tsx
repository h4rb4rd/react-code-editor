import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/ext-language_tools';

const CssEditor = () => {
  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      width="100%"
      placeholder="css"
      mode="css"
      theme="twilight"
      name="css-editor"
      onLoad={() => console.log('load')}
      onChange={() => console.log('change')}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={``}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CssEditor;
