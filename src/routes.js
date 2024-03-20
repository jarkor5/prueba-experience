import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Page from './Pages/Page.js';
import Form from './Components/Form.js';
import Success from './Components/Success.js';

const MyRoutes = () => { 
  return (
    <Routes>
      <Route exact path="/" element={<Page />} /> 
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default MyRoutes; // Exporta el componente



