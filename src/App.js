import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Mappings from './components/pages/Mappings';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/products' Component={Products} />
        <Route path='/mappings' Component={Mappings} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
