import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Dropdown, Wrap } from './ServicesElements';

const ServiceItem = ({ toggle, item, index, clicked }) => {
  return (
    <>
      <Wrap onClick={() => toggle(index)} key={index}>
        <h1>{item.service}</h1>
        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
      </Wrap>
      {clicked === index ? (
        <Dropdown index={clicked}>
          <p>{item.detail}</p>
        </Dropdown>
      ) : null}
    </>
  );
};

export default ServiceItem;
