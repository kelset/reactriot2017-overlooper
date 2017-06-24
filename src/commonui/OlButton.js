import styled from 'styled-components';

// "Overlooper" named button. Default button designs resides here.
const BaseOlButton = styled.button`
  font-family: Lato;
  font-weight: bold;
  font-size: 16px;
  background: #fff;
  border: 0;
`;

export const FlatOlButton = BaseOlButton.extend`
  color: #1b1b1b;
`;

export const OlButton = BaseOlButton.extend`
  background: #ed1c40;
  color: #fff;
  padding: 10px 10px;
  border-radius: 5px;
`;
