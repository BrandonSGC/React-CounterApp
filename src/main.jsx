import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

// Importar estilos...
import './styles.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <CounterApp />
    </React.StrictMode>
);