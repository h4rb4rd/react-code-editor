import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

import { EditorContext } from '../../context/EditorContext';

const JavascriptEditor = () => {
  const context = useContext(EditorContext);

  const handleJsChange = (value: string) => {
    if (context?.setJs) {
      context.setJs(value);
    }
  };

  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      width="100%"
      height="100%"
      placeholder="javascript"
      mode="javascript"
      theme="twilight"
      name="javascript-editor"
      onChange={handleJsChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={context?.js ?? ``}
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
