import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/My-Portfolio" element={<App />} />
    </Routes>
  </HashRouter>
);