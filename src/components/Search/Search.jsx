import React from 'react'
import './SearchStyle.css';

const Contact = () => {
  return (
    <div className='search'>
        <div className="search_wrapper">
            <span>YOU THINK OF IT WE HAVE IT:</span>
            <div className="search_text">
                <input type='text' placeholder='What are you looking for...' />
                <button>SEARCH</button>
            </div>
        </div>
    </div>
  )
}

export default Contact