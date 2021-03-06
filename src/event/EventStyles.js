import styled from 'styled-components';
import { OlButton } from '../commonUI/OlButton';

export const CardListContainer = styled.div`
  margin: 0 10%;
`;

export const SectionTitle = styled.h2`
  font-family: Lato;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CardWrapper = styled.div`
  width: 23%;
  margin: 0 1%;
  border: 1px solid #c1c1c1;
  margin-top: 40px;
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  cursor: pointer;
`;

export const CardBodyWrapper = styled.div`
  padding: 20px 20px;
`;

export const Title = styled.h4`
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
`;

export const Description = styled.p`
  font-family: Lato;
  font-size: 13px;
  color: #626262;
`;

export const SeekingPeopleContainer = styled.div`
  margin-left: -5px;
`;

export const SeekingPeopleImg = styled.img`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-left: 3px;
`;

export const SeekingPeopleText = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

export const ActionContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const FullWidthOlButton = OlButton.extend`
  width: 100%;
`;

export const SingleEventWrapper = styled.div`
  width: 50%;
  min-height: 500px;
  margin: 0 25%;
  background: #fff;
  border: 1px solid #f5f5f5;
`;

export const SingleEventImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
`;

export const SingleEventBodyWrapper = styled.div`
  padding: 15px 20px;
`;

export const SingleEventTitle = Title.extend`
  font-size: 18px;
`;

export const SingleEventDescription = Description.extend`
  font-size: 16px;
`;
