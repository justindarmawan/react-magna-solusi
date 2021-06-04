import React from 'react';
import {
  Column1,
  Column2,
  Heading,
  ServiceContainer,
  ServiceRow,
  ServiceWrapper,
  Subtitle,
  TopLine,
  Wrap,
} from './ClientElements';

const Client = (props) => {
  return (
    <>
      <ServiceContainer lightBg={props.lightBg} id={props.id}>
        <ServiceWrapper clickState={props.clicked}>
          <TopLine lightText={props.lightText}>{props.topLine}</TopLine>
          <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
          <ServiceRow imgStart={props.imgStart}>
            <Column1>
              <Heading lightText={props.lightText}>{props.headline}</Heading>
            </Column1>
            <Column2>
              <Wrap>{props.decoration}</Wrap>
              {/* <Wrap>
                <Services clicked={clicked} setClicked={setClicked} />
              </Wrap> */}
            </Column2>
          </ServiceRow>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Client;
