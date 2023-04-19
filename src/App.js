import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import Header from './component/Header/Header'
import PageNotFound from './component/PageNotFound/PageNotFound'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div className="App"> 
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
