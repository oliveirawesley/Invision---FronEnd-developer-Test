import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/main.scss';
import 'font-awesome/css/font-awesome.min.css'; 
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
