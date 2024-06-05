import react, { useState, useEffect } from 'react';
import "./ImgSlider.css";
import SliderBadge from "../Assets/images/slider-badag.jpg";
import SliderBadging from "../Assets/images/slider-badging.jpg";
import SliderScale from "../Assets/images/slider-scale.jpg"
import SliderScales from "../Assets/images/slider-scales.jpg"

export const ImgSlider = () => {
  let arr = [SliderBadge, SliderBadging, SliderScale, SliderScales];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      handleNextClick();
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % arr.length)
  }

  return (
    <div className="slider">
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {arr.map((item, index) => {
            return (
              <div className="carousel-item" key={index}>
                  <img className="carousel-image" src={item}></img>
              </div>
            )
          })}
        </div>
      </div>
      <div className="carousel-dots">
        <ul className="dots">
          {arr.map((item, index) => {
            if (item === arr[currentIndex]) {
              return <li key={index} style={{ color: "white" }}></li>
            }
            return <li key={index}></li>
          })}
        </ul>
      </div>
    </div>
  )
}