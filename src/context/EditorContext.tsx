import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type EditorContextType = {
  html: string;
  css: string;
  js: string;
  setHtml: Dispatch<SetStateAction<string>>;
  setCss: Dispatch<SetStateAction<string>>;
  setJs: Dispatch<SetStateAction<string>>;
};

const EditorContext = createContext<EditorContextType | null>(null);

const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const values = {
    html,
    css,
    js,
    setHtml,
    setCss,
    setJs,
  };

  return <EditorContext.Provider value={values}>{children}</EditorContext.Provider>;
};

export { EditorProvider, EditorContext };
