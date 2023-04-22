import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className='navBar'>
                <div className='title'>
                    <Grow in>
                        <h2>
                            <span>T</span>he<span>S</span>parks<span>F</span>oundation
                        </h2>
                    </Grow>
                </div>
                <div className={toggle ? "menuBar mobile-menuBar" : "menuBar"}>
                    <ul>
                        <li>
                            <NavLink className="link" to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/donate" style={{ textDecoration: 'none' }}>Donate</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/mission" style={{ textDecoration: 'none' }}>Mission</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/contact" style={{ textDecoration: 'none' }}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='hamBurger'>
                    <div className='hamBurger-menu'>
                        <Link className="link" style={{ textDecoration: 'none' }} onClick={() => setToggle(!toggle)}>
                            {toggle ? <CloseIcon color='action' /> : <MenuIcon sx={{ color: "#d79822" }} />}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
