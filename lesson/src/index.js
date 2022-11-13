import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Title from './components/Title/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const hwOne = ReactDOM.createRoot(document.getElementById('hwOne'));
hwOne.render(
    <React.StrictMode>
        <Title />
    </React.StrictMode>
);
