import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Characters from './components/characterPage/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/characters" element={<Characters/>}></Route>
    </Routes>
    
  </Router>,
 
);

