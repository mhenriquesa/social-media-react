import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderLoggedIn from './HeaderLoggedIn';
import HeaderLoggedOut from './HeaderLoggedOut';


export default function Header() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("complexAppToken"));

  return <>
    <header className="header-bar bg-primary mb-3">
    <div className="container d-flex flex-column flex-md-row align-items-center p-3">
      <h4 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/" className="text-white">
          Social Media using ReactJS
        </Link>
      </h4>
      {loggedIn ? 
      <HeaderLoggedIn setLoggedIn={setLoggedIn}/> 
      : <HeaderLoggedOut setLoggedIn={setLoggedIn}/>}
    </div>
  </header>
  </>
};
