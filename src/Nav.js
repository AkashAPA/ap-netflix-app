import React,{useState,useEffect} from 'react'
import './Nav.css';
import logo from './logo.png';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }

    }
    useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      return ()=> window.removeEventListener('scroll', transitionNavBar);
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav_contents">
        <img className='nav__logo' src={logo} alt="" />
      </div>
    </div>
  )
}

export default Nav;
