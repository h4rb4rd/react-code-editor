import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

const JavascriptEditor = () => {
  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      width="100%"
      placeholder="javascript"
      mode="javascript"
      theme="twilight"
      name="javascript-editor"
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

export default JavascriptEditor;
