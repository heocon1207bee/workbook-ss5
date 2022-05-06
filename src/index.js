import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Bài tập 1</h1>
    <App />
    <h1>Bài tập 2</h1>
    <App2 />
  </div>
);

