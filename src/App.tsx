import React from 'react';
import './App.css';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-container">
        <ResumeEditor />
        <ResumePreview />
      </div>
    </div>
  );
}

export default App;
