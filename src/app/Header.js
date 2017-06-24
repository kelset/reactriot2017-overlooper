import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlatOlButton } from '../commonui/OlButton';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
`;

const Header = () =>
  (<Wrapper className="container">
    <FlatOlButton>Create Event</FlatOlButton>
  </Wrapper>);

export default Header;
