import React from'react';
import './App.css';
import Home from'./routes/Home';
import About from'./routes/About';
import Navigation from'./component/Navigation';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Detail from'./routes/Detail'

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </HashRouter>
    );
}

export default App;