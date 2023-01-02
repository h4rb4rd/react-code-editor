import Header from '../Header';
import Preview from '../Preview/Preview';

import cl from './PreviewBar.module.css';

const PreviewBar = () => {
  return (
    <div className={cl.bar}>
      <Header />
      <Preview />
    </div>
  );
};

export default PreviewBar;
