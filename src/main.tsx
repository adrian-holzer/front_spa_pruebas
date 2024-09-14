import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client'
import { Comentarios } from './components/Comentarios'
import { ComentarioCrear } from './components/ComentarioCrear'

import { RegisterUser } from './components/RegisterUser'
import { Login } from './components/Login'
import { VerTurnos } from './components/VerTurnos'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <App />
)
