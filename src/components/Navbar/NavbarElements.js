import styled from 'styled-components';
import color from '../../constants/Theme';

export const NavLogo = styled.img`
  background-color: ${color.accent};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-left: 24px;
`;

// export const NavLogoName = styled(LinkRouter)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   margin-left: 24px;
//   align-items: center;
//   font-weight: bold;
//   text-decoration: none;
// `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-150%, 45px);
    font-size: 2rem;
    cursor: pointer;
    color: ${color.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
