import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlatOlButton } from '../commonui/OlButton';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  display: inline-block;
`;

const HeaderFlatOlButton = FlatOlButton.extend`
  line-height: 60px;
`;

const Header = () =>
  (<Wrapper className="container">
    <HeaderFlatOlButton>Create Event</HeaderFlatOlButton>
    <h3>Overlooper</h3>
  </Wrapper>);

export default Header;
