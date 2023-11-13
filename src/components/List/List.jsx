import React from 'react'
import { featuredData } from '../FeaturedProducts/FeatureData'
import Card from '../Card/Card';
import './ListStyle.css';


const List = () => {

    const data = featuredData;
  return (
    <div className='list'>
        {data.map(item => (
            <div>
            <Card item={item} key={item.id}/>
            <Card item={item} key={item.id}/>
            <Card item={item} key={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default List;