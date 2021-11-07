import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Navbar.css';

function Navbar() {
    const [click,setClick]=useState(false);
    function handleMenu(){
        setClick(!click)
    }
    function closeMenu(){
        setClick(false)
    }
    const [scrolled,setScrolled]=useState(false)

    window.addEventListener('scroll',()=>{

        const scrollPos=window.scrollY;
        if (scrollPos > 10) {
            setScrolled(true)
            
        }
          else {
              setScrolled(false)
            
         }
    })
    

    

    return (
        <>
        <nav className={scrolled ? 'nav scrolled' : 'nav'}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/" className="navbar__logo--element">Logo</Link>
                </div>
                <div className="menu-icon" onClick={handleMenu}>
                    <span className={click ? 'icon-times' : 'icon-bar'}></span>
                    <span className={click ? 'icon-times' : 'icon-bar'}></span>
                    <span className={click ? 'icon-times' : 'icon-bar'}></span>
                </div>

                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav__item">
                        <Link to='/' className="nav__item--element" onClick={closeMenu}>
                        casa
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='../Card' className="nav__item--element">
                        Serviço
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='#Footer' className="nav__item--element">
                        Sobre-nós
                        </Link>
                    </li>
                </ul> 

            </div>
        </nav>
            
        </>
    )
}

export default Navbar
