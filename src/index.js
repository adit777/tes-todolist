import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const name = "Sekolah Koding";

// function greet() {
//   return "Hallo " + name
// }


// const element = <h1>{greet(name)} !!</h1>

// ReactDOM.render(
//   element,
//   document.getElementById('master')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
