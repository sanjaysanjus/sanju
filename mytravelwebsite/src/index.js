import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';
// import "./components//profile/_profile.module.css"

createRoot(document.querySelector('#root')).render(<App/>);