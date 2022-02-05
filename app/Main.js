import React from 'react';
import ReactDOM from 'react-dom';
import Terms from './pages/Terms';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeGuest from './pages/HomeGuest';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Main() {
  return <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route exact path='/' element={<HomeGuest />} />
        <Route exact path='/about-us' element={<About />} />
        <Route exact path='/terms' element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

ReactDOM.render(<Main /> , document.querySelector("#root"))

if (module.hot) {
  module.hot.accept()
}