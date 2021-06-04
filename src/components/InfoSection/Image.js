import React from 'react';
import { Img } from './InfoElements';

const Image = (props) => {
  return <Img src={props.img} alt={props.alt} />;
};

export default Image;
