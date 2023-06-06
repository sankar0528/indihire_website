import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Whatwedo from './Whatwedo';
import Expertise from './Expertise';
import Findjobs from './Findjobs';
import Aboutus from './Aboutus';
import Resources from './Resources';
import Contactus from './Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Whatwedo" element={<Whatwedo/>} />
          <Route path="Expertise" element={<Expertise/>} />
          <Route path="Findjobs" element={<Findjobs />} />
          <Route path="Aboutus" element={<Aboutus/>} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Contactus" element={<Contactus/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
