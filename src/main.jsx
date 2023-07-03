import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp';
// Usualmente en react toda aplicacion comienza con un funtional Component -> componentes basados en funciones

// Importando el estilo global
import './styles.css'


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* // En este lugar se definen las "props" que se envian desde el componente padre al componente hijo */}
        <FirstApp title="Hola soy LuckyBlack"/>    
    </React.StrictMode>
);