import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WrapperHome,
  Title,
  ButtonWrapper,
  ButtonForm,
} from './InformHome.styled';

const InformHome = () => {
  const navigate = useNavigate();

  const handleClick = evt => {
    navigate('/catalog');
  };

  return (
    <WrapperHome>
      <Title>Welcome to Car Rental</Title>
      
      <ButtonWrapper>
        <ButtonForm onClick={handleClick}>Go to rent car</ButtonForm>
      </ButtonWrapper>
    </WrapperHome>
  );
};

export default InformHome;
