import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'
const ContainerRef = document.getElementById('root');
const root = createRoot(ContainerRef);
root.render(<App/>);