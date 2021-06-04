import styled from 'styled-components';
import color from '../../constants/Theme';

export const InfoContainer = styled.div`
  color: ${color.accent};
  background: ${({ lightBg }) => (lightBg ? color.grey : color.primary)};

  @media screen and (max-width: 768px) {
    padding-bottom: 140px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: ${({ clickState }) => (clickState ? '800px' : '550px')}; */
  height: 550px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 24px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 825px;
  }

  @media screen and (max-width: 600px) {
    height: 925px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: flex-start;
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
  margin-bottom: 16px;
  text-align: center;
  padding-bottom: 30px;
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
