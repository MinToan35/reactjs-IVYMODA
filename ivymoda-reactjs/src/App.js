import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Home/>
        <Routes>
          <Route path='/' exact  />
          <Route path='/services'  />
          <Route path='/products'  />
          <Route path='/sign-up'  />
        </Routes>
      </Router>
    </>
  );
}

export default App;