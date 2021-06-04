import styled from 'styled-components';
import color from '../../constants/Theme';

const Nav = styled.nav`
  background: ${color.accent};
  height: 120px;
  /* margin-top: -120px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  /* @media screen and () {
    background: transparent;
  } */
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const Header = (props) => {
  return (
    <Nav>
      <NavbarContainer>{props.children}</NavbarContainer>
    </Nav>
  );
};

export default Header;
