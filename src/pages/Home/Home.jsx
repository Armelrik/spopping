import React from 'react'
import Slider from '../../components/Slider/Slider';
import './HomeStyle.css';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/Contact/Contact';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Search />
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="trending"/>
      <Contact />
    </div>
  )
}

export default Home;
