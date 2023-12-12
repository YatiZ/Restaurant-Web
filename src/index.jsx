import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { OrderProvider } from './context/useOrderContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <OrderProvider>
  <App />
  </OrderProvider>
  
  </BrowserRouter>
    
  
);



