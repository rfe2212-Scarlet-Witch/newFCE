import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Overview from './Components/Overview.jsx';
//import for QnA
//import for reviews

function App() {
  return (
    <div className="app">
      <Overview/>
      <div>To be used by QnA component</div>
      <div>To be used by review component</div>
    </div>
  );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);