import React from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataKurtlarVadisi} from './data';

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <Slider {...settings}>
    {dataKurtlarVadisi.map(item=>(
      <div className='card'>
        <div className='card-top'>
          <img src={item.image}/>
          {item.title}
        </div>
        <div className='card-bottom'>{item.Description}</div>
      </div>
    ))}
    </Slider>
    </div>
  );
}

export default App;