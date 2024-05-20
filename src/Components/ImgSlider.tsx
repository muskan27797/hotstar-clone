import react, { useState, useEffect } from 'react';
import "./ImgSlider.css";
import SliderBadge from  "../Assets/images/slider-badag.jpg";
import SliderBadging from "../Assets/images/slider-badging.jpg";
import SliderScale from "../Assets/images/slider-scale.jpg"
import SliderScales from "../Assets/images/slider-scales.jpg"
import React from 'react';

export const ImgSlider = () => {
  let arr = [SliderBadge,SliderBadging, SliderScale, SliderScales ];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>{
      handleRightClick();
    }, 2000)
    return () => clearInterval(id)
  },[])

  const handleLeftClick = () => {
    setImageIndex(prevIndex => ((prevIndex - 1) + arr.length) % arr.length)
    
  }

  const handleRightClick = () => {
    setImageIndex(prevIndex => (prevIndex + 1) % arr.length)
  }

  return (
    <div className="slider">
      <div className="img-carousel">
        <button className="button-left"  onMouseOver={handleLeftClick}>Left</button>

        { arr.map((item,index)=>{
         if(imageIndex === index){
          return <img className="slider-img" src={item}></img>
         }
          //return <img className="slider-img" style={{visibility: imageIndex === index? 'visible' : 'hidden'}} src={item}></img>
        })}
        <button className="button-right" onMouseOver={handleRightClick}>Right</button>
      </div>
      <div className="carousel-dots">
        <ul className="dots">
          {arr.map((item, index) => {
            if(item === arr[imageIndex]){
               return <li key={index} style={{color:"white"}}></li>
            }
          return <li key={index}></li>} )}
        </ul>
      </div>
    </div>
  )
}