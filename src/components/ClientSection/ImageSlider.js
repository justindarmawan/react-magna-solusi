import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ClientItems } from '../../constants/ClientItems';
import { Image, LeftArrow, RightArrow, Slide, Slider } from './SliderElements';

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <Slider>
      <RightArrow>
        <FaArrowAltCircleRight onClick={nextSlide} />
      </RightArrow>
      <LeftArrow>
        <FaArrowAltCircleLeft onClick={prevSlide} />
      </LeftArrow>
      {ClientItems.map((slide, index) => {
        return index === current ? (
          <Slide active key={index}>
            {index === current && <Image src={slide.image} alt="client" />}
          </Slide>
        ) : (
          <Slide key={index}>
            {index === current && <Image src={slide.image} alt="client" />}
          </Slide>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
