import { useState } from 'react';

import { EditorTabs } from '../../types/common';
import CssEditor from '../CssEditor/CssEditor';
import HtmlEditor from '../HtmlEditor';
import JavascriptEditor from '../JsEditor/JsEditor';
import TabButton from '../TabButton';

import cl from './CodeBar.module.css';

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState(EditorTabs.HTML);

  return (
    <div className={cl.bar}>
      <nav className={cl.nav}>
        <TabButton handleClick={() => setActiveTab(EditorTabs.HTML)} isActive={activeTab === EditorTabs.HTML}>
          HTML
        </TabButton>
        <TabButton handleClick={() => setActiveTab(EditorTabs.CSS)} isActive={activeTab === EditorTabs.CSS}>
          CSS
        </TabButton>
        <TabButton handleClick={() => setActiveTab(EditorTabs.JS)} isActive={activeTab === EditorTabs.JS}>
          JS
        </TabButton>
      </nav>
      <div className={cl.editor}>
        {activeTab === EditorTabs.HTML && <HtmlEditor />}
        {activeTab === EditorTabs.CSS && <CssEditor />}
        {activeTab === EditorTabs.JS && <JavascriptEditor />}
      </div>
    </div>
  );
};

export default CodeBar;
