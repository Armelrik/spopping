import React from 'react'
import './FooterStyle.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="bottom_item">
          <h1>Categories</h1>
            <Link to='/'>Women</Link>
            <Link to='/'>Men</Link>
            <Link to='/'>Shoes</Link>
            <Link to='/'>Accessories</Link>
            <Link to='/'>New Arrivals</Link>
        </div>
        <div className="bottom_item">
          <h1>Links</h1>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Pages</Link>
            <Link to='/'>Stores</Link>
            <Link to='/'>Compare</Link>
            <Link to='/'>Cookies</Link>
        </div>
        <div className="bottom_item">
          <h1>About</h1>
          <span>Consequat exercitation veniam ipsum quis 
            eiusmod reprehenderit dolor duis consequat est.</span>
        </div>
        <div className="bottom_item">
          <h1>Contact</h1>
          <span>Consequat exercitation veniam ipsum quis 
            eiusmod reprehenderit dolor duis consequat est.</span>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="bottom_left">
          <Link to='/' className='bottom_logo'>BOUTIQUE</Link>
          <span className='copyright'>
            © Copyright 2023 melrik'digital. All rights reserved.
          </span>
        </div>
        <div className="bottom_right">
          <img src='/assets/img/stripe.png'alt='Pay'/>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
