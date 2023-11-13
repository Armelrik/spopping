import React from 'react'
import './CategoriesStyle.css';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='assets/img/slider1.jpg' alt='Sale' />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src='assets/img/slider2.jpg' alt='Sale' />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row"><img src='assets/img/slider3.jpg' alt='Sale' />
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
                </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src='assets/img/slider1.jpg' alt='Sale' />
                        <button>
                            <Link className='link' to="/products/1">Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='assets/img/slider2.jpg' alt='Sale' />
                        <button>
                            <Link className='link' to="/products/1">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='assets/img/slider3.jpg' alt='Sale' />
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories