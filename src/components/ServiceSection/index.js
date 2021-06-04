import React, { useState } from 'react';
import Image from '../../components/InfoSection/Image';
import ServiceSvg from '../../images/service.svg';
import Services from '../InfoSection/Services';
import {
  Column1,
  Column2,
  ServiceContainer,
  ServiceRow,
  ServiceWrapper,
  Subtitle,
  TopLine,
  Wrap,
} from './ServiceElements';

const Service = (props) => {
  const [clicked, setClicked] = useState(0);
  console.log('click state :' + clicked);

  return (
    <>
      <ServiceContainer lightBg={props.lightBg} id={props.id}>
        <ServiceWrapper clicked={clicked}>
          <TopLine lightText={props.lightText}>{props.topLine}</TopLine>
          <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
          <ServiceRow imgStart={props.imgStart}>
            <Column1>
              <Wrap>
                <Image img={ServiceSvg} alt={'Service'}></Image>
              </Wrap>
            </Column1>
            <Column2>
              {/* <Heading lightText={props.lightText}>{props.headline}</Heading> */}
              <Wrap>
                <Services clicked={clicked} setClicked={setClicked} />
              </Wrap>
            </Column2>
          </ServiceRow>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Service;
