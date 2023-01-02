import { useContext, useMemo } from 'react';

import { EditorContext } from '../../context/EditorContext';

import cl from './Preview.module.css';

const Preview = () => {
  const context = useContext(EditorContext);

  const memoDocument = useMemo(() => {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${context?.css ?? ''}</style>
      </head>
      <body>
      ${context?.html ?? ''}
      <script>${context?.js ?? ''}</script>
      </body>
      </html>
`;
  }, [context?.html, context?.css, context?.js]);

  return (
    <div className={cl.preview}>
      <iframe className={cl.frame} title="preview" srcDoc={memoDocument}></iframe>
    </div>
  );
};

export default Preview;
