import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { CheckoutProvider } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe';

const fetchClientSecret = () => {
  return fetch('/create-checkout-session', { method: 'POST' })
    .then((res) => res.json())
    .then((data) => data.checkoutSessionClientSecret);
};

//
//
//
// NEED TO DEVELOP A BACKEND ON NODE.JS AND THEN USE A FRAMEWORK BUILT ON TOP OF NODE.JS CALLED EXPRESS.JS
// ALSO NEED TO USE A DIFFERENT STARTER-FILE TO INITIALIZE STRIPE SDK WITH STRIPEPROMISE
//
//
//

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <App />
    </CheckoutProvider>
  </StrictMode>,
)
