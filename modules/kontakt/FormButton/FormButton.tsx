import React from 'react';
import { LoadingSpinner } from '../../../Components/Atoms/LoadingSpinner/LoadingSpinner';
import { StyledButton } from './FormButton.styles';

type Props = {
  type: 'submit' | 'reset' | 'button';
  isLoading: boolean;
  isDisabled: boolean;
};

export const FormButton = ({ type, isLoading, isDisabled }: Props) => {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      {isLoading ? <LoadingSpinner /> : 'Wyślij'}
    </StyledButton>
  );
};
