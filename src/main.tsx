import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <App />
)
