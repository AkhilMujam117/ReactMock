import React from 'react';
import "./App.css"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bgimage'>
        <div className='App-header'>
        <h1 style={{color:"blue "}}>Change the way to manage with the tasks with taskade</h1>
        <Link to='/addTask'><Button
      variant="contained">
      Add Task
    </Button></Link>
        </div>
       
    </div>
  );
};

export default Home;
