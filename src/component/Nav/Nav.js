import React , { useState, useEffect } from 'react';
import './Nav.css';

function Nav(){

  const [show, handleShow] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll", () => {
       if(window.scrollY > 100){
         handleShow(true)
       }
       else handleShow(false);
      }
      );
      return ()=>{
        window.removeEventListener("scroll");
      };
      
    },[]);

  return(
      <div className={`nav ${show && "nav__black"}`}>
       <img 
       className="nav__logo"
       src="https://fxpro.news/wp-content/uploads/2020/04/netflix-logo.png"
       alt="Netflix Logo"
       />
       <img 
       className="nav__avatar"
       src="https://getintopc.com/wp-content/uploads/2013/09/GIpTalk-Logo.png"
       alt="Netflix avatar"
      />
   </div>
  )  
}
export default Nav;