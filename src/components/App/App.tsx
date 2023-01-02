import CodeBar from '../CodeBar';
import { EditorProvider } from '../../context/EditorContext';

function App() {
  return (
    <EditorProvider>
      <CodeBar />
    </EditorProvider>
  );
}

export default App;
