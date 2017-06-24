import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlatOlButton, OlButton } from '../commonui/OlButton';

const Wrapper = styled.ul`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderRightFlatOlButton = FlatOlButton.extend`
  margin-right: 15px;
`;

const HeaderOlButton = OlButton.extend`

`;

const HeaderLi = styled.li`
  align-self: center;
`;

const LogoHeaderLi = styled.li`
  align-self: center;
  width: 70%;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 0;
  color: #ed1c40;
  font-size: 16px;
  font-weight: bold;
  font-family: Lato;
`;

const Header = () =>
  (<Wrapper className="container">
    <HeaderLi>
      <FlatOlButton>Create Event</FlatOlButton>
    </HeaderLi>
    <LogoHeaderLi>
      <Logo>Overlooper</Logo>
    </LogoHeaderLi>
    <HeaderLi>
      <HeaderRightFlatOlButton>Login</HeaderRightFlatOlButton>
      <HeaderOlButton>Sign Up</HeaderOlButton>
    </HeaderLi>
  </Wrapper>);

export default Header;
