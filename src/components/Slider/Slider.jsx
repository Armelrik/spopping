import { EastRounded, WestRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import './SliderStyle.css';

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        'assets/img/slider1.jpg',
        'assets/img/slider2.jpg',
        'assets/img/slider3.jpg',
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev-1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev+1);
    };


  return (
    <div className='slider'>
        <div className="container" 
        style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[1]} alt='slide1' />
            <img src={data[0]} alt='slide2' />
            <img src={data[2]} alt='slide3' />
            <img src={data[3]} alt='slide3' />
            <img src={data[4]} alt='slide3' />
            <img src={data[5]} alt='slide3' />
        </div>
        <div className="slideicons">
            <div className="icon" onClick={prevSlide}>
                <WestRounded />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastRounded />
            </div>
        </div>

    </div>
  )
}

export default Slider