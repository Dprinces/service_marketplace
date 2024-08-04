import React from 'react';
import Slider from 'react-slick';
import '../Styles/HeroCarousel.module.css'; // Import your CSS module for styling

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: '/path/to/image1.jpg',
      alt: 'Slide 1',
    },
    {
      id: 2,
      image: '/path/to/image2.jpg',
      alt: 'Slide 2',
    },
    {
      id: 3,
      image: '/path/to/image3.jpg',
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="hero-slide">
            <img src={slide.image} alt={slide.alt} className="hero-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
