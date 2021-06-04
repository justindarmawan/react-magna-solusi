import styled, { css } from 'styled-components';
import color from '../../constants/Theme';

export const Slider = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  background: ${color.accent};
  width: 300px;
  height: 200px;
  border-radius: 20px;
  object-fit: contain;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  font-size: 1rem;
  color: ${color.accent};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
  font-size: 1rem;
  color: ${color.accent};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.08);
    `}
`;

export const SlideActive = styled(Slide)`
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
`;
