import styled from 'styled-components';
import color from '../../../constants/Theme';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* height: 100vh; */
  width: 100%;
  height: 100%;
  background: ${color.accent};
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    /* padding-bottom: 140px; */
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  /* height: 550px; */
  height: ${({ isClicked }) => (isClicked ? '550px' : '0px')};
  /* @media screen and (max-width: 768px) {
    height: 825px;
  } */
`;

export const Wrap = styled.div`
  background: ${color.primary};
  color: ${color.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 466px;
  /* text-align: start; */
  cursor: pointer;

  h1 {
    padding: 16px;
    font-size: 16px;
    text-transform: uppercase;
  }
  span {
    padding-right: 20px;
  }
`;

export const Dropdown = styled.div`
  background: ${color.accent};
  width: 466px;
  height: ${({ index }) => {
    switch (index) {
      case 0:
        return '270px';
      case 1:
        return '390px';
      case 2:
        return '270px';
      case 4:
        return '310px';
      default:
        return '210px';
    }
  }};
  /* height: 250px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.accent};
  border-top: 1px solid ${color.accent};
  padding: 0 20px;
  text-align: justify;

  p {
    color: ${color.black};
    font-size: 16px;
  }
`;
