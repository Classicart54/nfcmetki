import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { hydrate, render } from "react-dom";
// … Ваш код
const rootElement = document.getElementById("root"); // (или ваш id при олтличии)
if (rootElement.hasChildNodes()) { // …Если в корневом элементе есть контент, то…
    hydrate( < App / > , rootElement); // …"цепляем" приложение на существующий DOM.
} else { // …Иначе рендерим приложение стандартным образом
    render( < App / > , rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();