import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/main.scss';	// import styles to make webpack aware of them

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
