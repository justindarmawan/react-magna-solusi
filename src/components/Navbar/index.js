import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import InfoItems from '../../constants/InfoItems';
import NavbarItems from '../../constants/NavbarItems';
import Logo from '../../images/logoMagna.png';
import Header from './Header';
import { MobileIcon, NavLogo, NavMenu } from './NavbarElements';
import NavItem from './NavItem';

const Navbar = (props) => {
  return (
    <>
      <Header lightBg={InfoItems.lightBg} id={NavbarItems}>
        <LinkRouter to="/">
          <NavLogo src={Logo} />
        </LinkRouter>
        {/* <NavLogoName to="/">magna</NavLogoName> */}
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {NavbarItems.map((item, index) => (
            <NavItem to={item} key={index}>
              {item.toUpperCase()}
            </NavItem>
          ))}
        </NavMenu>
        {/* <NavButton to="/signin">Sign In</NavButton> */}
      </Header>
    </>
  );
};

export default Navbar;
