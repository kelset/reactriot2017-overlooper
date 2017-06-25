import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Wrapper = styled.div`
    font-family: Lato;
    padding: 0 200px;
`;

export const FormWrapper = styled.div`
  margin-top: 15px;
`;

export const DivWithoutPadding = styled.div`
  padding: 0;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
`;

export const InputTitle = styled.input`
  border: 1px solid #bfbfbf;
  height: 50px;
  font-size: 13px;
  border-radius: 5px;
  padding: 5px 20px;
  width: 100%;
`;

export const InputDesc = styled.textarea`
  margin-top: 5px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 15px 20px;
  width: 100%;
  height: 130px;
  font-size: 13px;
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ActionWrapper = styled.div`
  float: right;
  width: 100px;
`;
