import React, { useState } from 'react'
import './ProductStyle.css';
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';


const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
       
  ];

  return (
    <div className="product">
      <div className="leftProduct">
        <div className="leftImages">
          <img src={images[0]} alt='1' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='2' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImage">
          <img src={images[selectedImg]} alt='Main' />
        </div>
      </div>

      <div className="rightProduct">
        <h1>Title</h1>
        <span className='priceTag'>$199</span>
        <p>
          Eu non excepteur aliqua enim non duis tempor. 
          Irure sit ad labore sunt in velit. Et magna magna 
          duis reprehenderit id elit in consequat mollit velit
          laborum sunt anim. Aliqua ea culpa id qui enim voluptate.
          Cupidatat proident voluptate voluptate in.
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev) => (prev >= 10 ? 10 : prev+1))}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart />ADD TO CART
        </button>
        <div className="link">
          <div className="itemCart">
            <FavoriteBorder />ADD TO WISH LIST
          </div>
          <div className="itemCart">
            <Balance />ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: POLO</span>
          <span>Product type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Product;

