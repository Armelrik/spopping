import React from 'react'
import './CardStyle.css';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`} >
        <div className='card'>
            <div className="image">
                {item.isNew &&<span>New season</span>}
                <img src={item.img} alt={item.title} className='mainImg'/>
                <img src={item.img2} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card

