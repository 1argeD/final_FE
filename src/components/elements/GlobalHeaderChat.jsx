import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowBackIcon } from '../../assets/icons/arrow_back_ios.svg';

const GlobalHeaderChat = () => {
  const navigate = useNavigate();

  const onPathHandler = (path) => {
    navigate(path);
  };

  return (
    <NavbarWrapper>
      <Navbar>
        <NavItem>
          <div className='nickname-wrapper'>
            <ArrowBackIcon onClick={() => onPathHandler('/')} />
            <span className='chat-nickname'>닉네임</span>
          </div>
        </NavItem>
        <NavItem onClick={() => onPathHandler('/')}>
          <span className='logo'>LOGO</span>
        </NavItem>
        <NavItem>
          <button>나가기</button>
        </NavItem>
      </Navbar>
    </NavbarWrapper>
  );
};

export default GlobalHeaderChat;

const NavbarWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
  cursor: pointer;
  width: fit-content;

  .nickname-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .chat-nickname {
      font-size: 1rem;
    }
  }

  .logo {
    margin-right: 3rem;
  }
`;
