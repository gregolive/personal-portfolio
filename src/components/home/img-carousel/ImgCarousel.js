import { useState, useEffect } from 'react';
import StyledCarousel, { ImgSlide, NavDots, Dot } from './StyledImgCarousel';

const ImgCarousel = ({ images, color }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const slideLeft = () => {
    if (slideIndex <= 0) { 
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const slideRight = () => {
    if (slideIndex >= images.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  useEffect(() => {
    const autoscroll = window.setInterval(slideRight, 5000);
    return () => window.clearInterval(autoscroll);
  });

  return (
    <>
      <StyledCarousel color={color}>
        {images.map((img, i) =>
          <ImgSlide className={(i === slideIndex) ? 'active' : ''} key={i}>
            <img src={img.src} alt={img.alt} />
          </ImgSlide>
        )}

        <button type='button' onClick={slideLeft}>
          <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>
        </button>
        <button type='button' onClick={slideRight}>
          <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>
        </button>
      </StyledCarousel>

      <NavDots>
        {images.map((img, i) =>
          <Dot color={color} className={(i === slideIndex) ? 'active' : ''} onClick={() => setSlideIndex(i)} key={i} />
        )}
      </NavDots>
    </>
  );
};

export default ImgCarousel;