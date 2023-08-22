import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'bootstrap/dist/js/bootstrap.js'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC2PnogSdxTozjb9GjGkrchomqzqxG2vOE",
    authDomain: "aplv-b1bc0.firebaseapp.com",
    projectId: "aplv-b1bc0",
    storageBucket: "aplv-b1bc0.appspot.com",
    messagingSenderId: "67919913317",
    appId: "1:67919913317:web:2286b85c3675864676418c",
    measurementId: "G-XVX8CWK4Q2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
