import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Home/>
        <Routes >
          <Route path='/' exact ></Route>
          <Route path='/danh-muc/hang-nu-moi-ve'  ></Route>
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;