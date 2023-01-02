import { useState } from 'react';

import { EditorTabs } from '../../types/common';
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
        {activeTab === EditorTabs.HTML && <div>html</div>}
        {activeTab === EditorTabs.CSS && <div>css</div>}
        {activeTab === EditorTabs.JS && <div>js</div>}
      </div>
    </div>
  );
};

export default CodeBar;
