import React from 'react';
import CareerIcon1 from '../../images/about.svg';
import {
  CareerCard,
  CareerContainer,
  CareerH1,
  CareerH2,
  CareerIcon,
  CareerP,
  CareerWrapper,
} from './CareerElements';

const Career = () => {
  return (
    <CareerContainer id={'career'}>
      <CareerH1>Career</CareerH1>
      <CareerWrapper>
        <CareerCard>
          <CareerIcon src={CareerIcon1} />
          <CareerH2>Application Dev</CareerH2>
          <CareerP>Requirement</CareerP>
        </CareerCard>
        <CareerCard>
          <CareerIcon src={CareerIcon1} />
          <CareerH2>Application Dev</CareerH2>
          <CareerP>Requirement</CareerP>
        </CareerCard>
        <CareerCard>
          <CareerIcon src={CareerIcon1} />
          <CareerH2>Application Dev</CareerH2>
          <CareerP>Requirement</CareerP>
        </CareerCard>
      </CareerWrapper>
    </CareerContainer>
  );
};

export default Career;
