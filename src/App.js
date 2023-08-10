
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar';
import Reactcontent from './routecontent';
function App() {
  return (
    <div className="App">
      <div className='titleDiv'>
        <h1>CRUD Operations</h1>
      </div>
     <Router>
      <div className='row'>
        <div className='col-lg-4'>
          <Navbar/>
        </div>
        <div className='col-lg-8'>
        <Reactcontent/>
        </div>
      </div>
     </Router>
    </div>
  );
}

export default App;
