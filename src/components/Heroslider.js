import React, { useState, useEffect } from 'react';
import '../styles/HeroSlider.css';

const slides = [
  { imageUrl: require('../assets/image1.jpg'), caption: 'Connecting Farmers and Buyers Globally' },
  { imageUrl: require('../assets/image2.jpg'), caption: 'Your One-Stop Solution for Fresh Produce' },
  { imageUrl: require('../assets/image3.jpg'), caption: 'Building a Sustainable Agro Ecosystem' },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }} // Fixed syntax here
        >
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
