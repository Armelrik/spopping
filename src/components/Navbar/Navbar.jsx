import React, { useState } from 'react'
import { FavoriteBorderOutlined, KeyboardArrowDown, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className='navbar_wrapper'>

             {/*** Left part ***/ }
            <div className='left'>
                <div className='item'>
                    <img src='assets/img/en.png' alt='LG'/>
                    <KeyboardArrowDown />
                </div>
                <div className='item'>
                    <span>USD</span>
                    <KeyboardArrowDown />
                </div>
                <div className="item">
                    <Link to='/products/1'>Women</Link>
                </div>
                <div className="item">
                    <Link to='/products/2'>Men</Link>
                </div>
                <div className="item">
                    <Link to='/products/3'>Children</Link>
                </div>
                
            </div>
            {/*** Center part ***/ }
            <div className='center'>
                <Link to='/'>BOUTIQUE</Link>
            </div>

             {/*** Right part ***/ }
            <div className='right'>
                <div className="item">
                    <Link to='/'>Home</Link>
                </div>
                <div className="item">
                    <Link to='/'>About</Link>
                </div>
                <div className="item">
                    <Link to='/'>Contact</Link>
                </div>
                <div className="item">
                    <Link to='/'>Stores</Link>
                </div>
                <div className="icons">
                    <Search />
                    <PersonOutlineOutlined />
                    <FavoriteBorderOutlined />
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlined />
                        <span>10</span>
                    </div>
                </div>
              
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar;

