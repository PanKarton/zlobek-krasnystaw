import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { StyledSpinnerWrapper } from './LoadingSpinner.styled';

const LoadingSpinner = () => (
  <StyledSpinnerWrapper>
    <AiOutlineLoading3Quarters />
  </StyledSpinnerWrapper>
);

export default LoadingSpinner;
