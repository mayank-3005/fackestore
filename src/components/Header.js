import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <nav className="flex justify-between shadow-xl header-nav">
                <div className="logo">
                  <Link to="/">
                  <h1>Fake Store</h1>
                  </Link> 
                </div>
                <div className='nav-right'>
                    <div className="hamburger" >
                    <Link className='nav-link-cart' to="/cart"><i className="fa fa-shopping-cart px-1"></i><span className='cart-item'>{cartItems.length}</span></Link>
                        
                        <i className="fa fa-bars " aria-hidden="true" onClick={toggleNav}></i>
                        {/* Cart icon for mobile view */}
                      
                    </div>
                    {/* Navigation list */}
                    <ul className={`flex px-[70px] nav-list ${isNavOpen ? 'active' : ''}`}>
                        <li className="p-3">
                            <Link to="/" onClick={toggleNav}>Home</Link>
                        </li>
                        <li className="p-3">
                            <Link to="/about" onClick={toggleNav}>About</Link>
                        </li>
                        <li className="p-3">
                            <Link to="/contact" onClick={toggleNav}>Contact</Link>
                        </li>
                        {/* Cart icon for desktop view */}
                        <li className="p-3 cart-icon-desktop">
                            <Link to="/cart" onClick={toggleNav}><i className="fa fa-shopping-cart px-1"></i><span className='cart-item'>{cartItems.length}</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
