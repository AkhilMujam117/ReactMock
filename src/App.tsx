import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './AddTask';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>} > 
          <Route index    element={<Home/>} />
         <Route path='/addTask' element={<AddTask/>} />
           <Route path='*' element={<Error/>} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
