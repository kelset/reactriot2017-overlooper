import React from 'react';
import { Link } from 'react-router-dom';
import { FlatOlButton, OlButton } from '../commonUI/OlButton';
import { APP_NAME } from '../constants';

import { Wrapper, HeaderRightFlatOlButton, HeaderLi, LogoHeaderLi, Logo } from './HeaderStyles';

const Header = () =>
  (<Wrapper className="container">
    <HeaderLi>
      <Link to="/create-event"><FlatOlButton>Create Event</FlatOlButton></Link>
    </HeaderLi>
    <LogoHeaderLi>
      <Link to="/"><Logo>{APP_NAME}</Logo></Link>
    </LogoHeaderLi>
    <HeaderLi>
      <HeaderRightFlatOlButton>Login</HeaderRightFlatOlButton>
      <OlButton>Sign Up</OlButton>
    </HeaderLi>
  </Wrapper>);

export default Header;
