import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../constants/Theme';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${color.accent};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${color.primary};

  &:hover {
    color: ${color.black};
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  /* top: 1.2rem;
  right: 1.5rem; */
  top: 0;
  right: 0;
  transform: translate(-150%, 45px);
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${color.accent};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: repeat(7, 60px); */
  /* ganti ke 7 kalau mau di tambah button sign in */
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    /* grid-template-rows: repeat(7, 40px); */
    grid-template-rows: repeat(6, 40px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: ${color.primary};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${color.accent};
  /* font-size: 16px; */
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${color.black};
  }
`;
