import React from 'react';
import './App.css';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';
import { ConfigProvider } from 'antd';
const App: React.FC = () => {
  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
    <div className="App">
      <div className="app-container">
        <ResumeEditor />
        <ResumePreview />
      </div>
    </div>
    </ConfigProvider>
  );
}

export default App;
