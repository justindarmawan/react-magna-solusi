import React from 'react';
import { IconContext } from 'react-icons';
import ServiceItems from '../../../constants/ServiceItems';
import color from '../../../constants/Theme';
import ServiceItem from './ServiceItem';
import { AccordionSection, Container } from './ServicesElements';

const Services = (props) => {
  const toggle = (index) => {
    if (props.clicked === index) {
      return props.setClicked((prevState) => (prevState = null));
    }
    props.setClicked((prevState) => (prevState = index));
  };
  return (
    <IconContext.Provider value={{ color: color.accent, size: '25px' }}>
      <AccordionSection>
        <Container isClicked={props.clicked}>
          {ServiceItems.map((item, index) => {
            return (
              <ServiceItem
                toggle={toggle}
                item={item}
                index={index}
                clicked={props.clicked}
                key={index}
              />
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Services;
