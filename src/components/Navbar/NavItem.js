import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import color from '../../constants/Theme';

const Item = styled.li`
  height: 50px;
`;

const NavLinks = styled(LinkScroll)`
  color: ${color.black};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50px;

  &.active {
    /* border-bottom: 3px solid #01bf71; */
    background: ${color.primary};
    font-weight: 700;
    color: #fff;
  }

  &:hover {
    color: ${color.primary};
  }

  &.active:hover {
    color: ${color.black};
  }
`;

const NavItem = (props) => {
  return (
    <Item>
      <NavLinks
        to={props.to}
        smooth={true}
        duration={400}
        spy={true}
        exact="true"
        offset={-120}
      >
        {props.children}
      </NavLinks>
    </Item>
  );
};

export default NavItem;
