import React from 'react';
import './CartStyle.css';
import { featuredData } from '../FeaturedProducts/FeatureData';
import { DeleteOutline } from '@mui/icons-material';

const Cart = () => {

    const data = featuredData;

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="cartItem" key={item.id}>
                <img src={item.img} alt='' />
                <div className="cartDetails">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="cartPrice">
                        1 x ${item.price}
                    </div>
                </div> 
                <DeleteOutline className='delete'/>
            </div>

        ))}
       <div className="cartTotal">
        <span>SUBTOTAL</span>
        <span>$123</span>
       </div>
       <button>PROCEED TO CHECKOUT</button>
       <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;

