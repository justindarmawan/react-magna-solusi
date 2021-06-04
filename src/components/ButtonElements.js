import { Link } from 'react-scroll';
import styled from 'styled-components';
import color from '../constants/Theme';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? color.primary : color.accent)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ primary }) => (primary ? color.accent : color.primary)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? color.black : color.accent)};
    background: ${({ primary }) => (primary ? color.primary : color.black)};
  }
`;
