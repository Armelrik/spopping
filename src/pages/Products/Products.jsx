import React, { useState } from 'react';
import './ProductsStyle.css';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>

      {/* Left panel */}
      <div className="leftProducts">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>50</span>
            <input type='range' min={50} max={10000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Lowest first</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Higest first</label>
          </div>
        </div>

      </div>
      {/* Right panel */}
      <div className="rightProducts">
        <img className='catImg' src='/assets/img/slider3.jpg' alt='img' />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products