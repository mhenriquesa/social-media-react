import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import HomeGuest from './components/HomeGuest';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Main() {
  return <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route exact path='/' element={<HomeGuest />} />
        <Route exact path='/about-us' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

ReactDOM.render(<Main /> , document.querySelector("#root"))

if (module.hot) {
  module.hot.accept()
}