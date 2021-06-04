import styled from 'styled-components';
import color from '../../constants/Theme';

export const ServiceContainer = styled.div`
  color: ${color.accent};
  background: ${({ lightBg }) => (lightBg ? color.grey : color.primary)};

  @media screen and (max-width: 768px) {
    padding-bottom: 140px;
  }
`;

export const ServiceWrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  height: ${({ clicked }) => {
    let k = 550;
    switch (clicked) {
      case 0:
        return `${k + 270}px`;
      case 1:
        return `${k + 380}px`;
      case 2:
        return `${k + 280}px`;
      case 3:
        return `${k + 180}px`;
      case 4:
        return `${k + 300}px`;
      default:
        return `${k}px`;
    }
  }};
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 24px;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: ${({ clicked }) => {
      let k = 800;
      switch (clicked) {
        case 0:
          return `${k + 270}px`;
        case 1:
          return `${k + 380}px`;
        case 2:
          return `${k + 280}px`;
        case 3:
          return `${k + 180}px`;
        case 4:
          return `${k + 300}px`;
        default:
          return `${k}px`;
      }
    }};
  }
`;

export const ServiceRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-auto-rows: 250px;
  align-items: flex-start;
  justify-content: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: auto;
  padding-bottom: 30px;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? color.accent : color.primary)};
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 24px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 20px;
  text-align: justify;
  text-transform: uppercase;
  max-width: auto;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? color.accent : color.primary)};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: auto;
  margin-bottom: 35px;
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? color.primary : color.accent)};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Wrap = styled.div`
  max-width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 300px;
  /* margin: 0 0 10px 0; */
`;
