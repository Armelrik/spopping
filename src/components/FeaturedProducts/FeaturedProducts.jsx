import React from 'react';
import './FeatureProducts.css';
import { featuredData } from './FeatureData';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = featuredData;

  return (
    <div className='featureProduct'>
        <div className="topFeature">
            <h1>{type} Products</h1>
            <p>
                Sit ad deserunt anim sit fugiat culpa veniam
                cillum voluptate nisi qui sunt est tempor.
                Amet commodo deserunt ex pariatur ipsum enim.
                Sit ad deserunt anim sit fugiat culpa veniam
                cillum voluptate nisi qui sunt est tempor.
            </p>
        </div>
        <div className="bottomFeature">
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}


export default FeaturedProducts;