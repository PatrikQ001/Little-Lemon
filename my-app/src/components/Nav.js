import React,{useState} from 'react';
import '../styles/Nav.css';
import logo from '../images/Logo .svg';

function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className ={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt="Logo"/>
            </a>
            <div className='menu-icon' onClick={toogleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav;