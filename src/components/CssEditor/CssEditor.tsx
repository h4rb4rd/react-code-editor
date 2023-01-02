import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/ext-language_tools';

import { EditorContext } from '../../context/EditorContext';

const CssEditor = () => {
  const context = useContext(EditorContext);

  const handleCssChange = (value: string) => {
    if (context?.setCss) {
      context.setCss(value);
    }
  };

  return (
    <AceEditor
      style={{
        backgroundColor: '#202020',
      }}
      width="100%"
      height="100%"
      placeholder="css"
      mode="css"
      theme="twilight"
      name="css-editor"
      onChange={handleCssChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={context?.css ?? ``}
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
