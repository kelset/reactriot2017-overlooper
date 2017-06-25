import styled from 'styled-components';
import { FlatOlButton } from '../commonUI/OlButton';

export const Wrapper = styled.ul`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderRightFlatOlButton = FlatOlButton.extend`
  margin-right: 15px;
`;

export const HeaderLi = styled.li`
  align-self: center;
`;

export const LogoHeaderLi = styled.li`
  align-self: center;
  width: 70%;
  text-align: center;
`;

export const Logo = styled.h1`
  margin: 0;
  color: #ed1c40;
  font-size: 16px;
  font-weight: bold;
  font-family: Lato;
`;
