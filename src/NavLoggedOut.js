import React, { useState, useEffect } from "react";
import "./NavLoggedout.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';





function NavLoggedOut() {
  const [show, setshow] = useState(false);
  // this adds a black bar when the user scrolls 100px or more in the Y direction
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll", setshow(false));
    };
  }, []);

  return (
    //   the addition of ${show && "nav__black"} inside of class name allow additional css or js to active when the condition is true. This allows for more complexe activites in a simple manor
  
      <div className={`nav ${show && "nav__black"}`}>
        <h className={`header ${show && "header__black"}`}>Logged In</h>
      <img
        className="nav__logo"
        src="/logo192.png"
        alt="Netflix Logo"
      />
     
      
     
      <Link to='/LogoutPage'> 
      <img
       
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/480px-OOjs_UI_icon_userAvatar-constructive.svg.png"
        alt="Profile Avatar"
      /></Link>
    </div>
    
    
    
  );
}

export default NavLoggedOut;