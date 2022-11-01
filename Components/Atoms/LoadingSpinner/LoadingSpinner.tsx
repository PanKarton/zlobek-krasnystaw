import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { StyledSpinnerWrapper } from './LoadingSpinner.styled';

export const LoadingSpinner = () => (
  <StyledSpinnerWrapper>
    <AiOutlineLoading3Quarters />
  </StyledSpinnerWrapper>
);
