import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../constants/Theme';

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: ${color.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${color.accent};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${color.primary};
    color: ${color.black};
  }
`;

const NavButton = (props) => {
  return (
    <NavBtn>
      <NavBtnLink to={props.to}>{props.children}</NavBtnLink>
    </NavBtn>
  );
};

export default NavButton;
