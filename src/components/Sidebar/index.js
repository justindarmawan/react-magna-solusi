import NavbarItems from '../../constants/NavbarItems';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NavbarItems.map((item, index) => (
            <SidebarItem to={item} toggle={props.toggle} key={index}>
              {item.toUpperCase()}
            </SidebarItem>
          ))}
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
