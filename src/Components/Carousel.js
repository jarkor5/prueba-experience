import React, { useState, useEffect } from 'react';
import image1 from '../assets/Property 1=Carrousel-one.png';
import image2 from '../assets/Property 1=Carrousel-two (1).png';
import image3 from '../assets/Property 1=Carrousel-three.png';
import '../styles/carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Cambio de imagen cada 10 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    // Cambia a la siguiente imagen al hacer clic
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel" onClick={handleClick}>
      <img className='carousel-image' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default Carousel;
