import CodeBar from '../CodeBar';
import { EditorProvider } from '../../context/EditorContext';
import PreviewBar from '../PreviewBar';

import cl from './App.module.css';

function App() {
  return (
    <EditorProvider>
      <div className={cl.main}>
        <CodeBar />
        <PreviewBar />
      </div>
    </EditorProvider>
  );
}

export default App;
