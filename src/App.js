import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
       <ToastContainer />
        <Routes />
    </div>
  );
}

export default App;
