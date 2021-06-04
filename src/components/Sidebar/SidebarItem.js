import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import color from '../../constants/Theme';

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${color.primary};
  cursor: pointer;
  font-weight: 400;

  &:hover {
    color: ${color.black};
    transition: 0.2s ease-in-out;
  }
`;

const SidebarItem = (props) => {
  return (
    <SidebarLink
      to={props.to}
      onClick={props.toggle}
      smooth={true}
      duration={400}
      spy={true}
      exact="true"
      offset={-120}
    >
      {props.children}
    </SidebarLink>
  );
};

export default SidebarItem;
