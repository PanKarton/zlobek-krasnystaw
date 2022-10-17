import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { StyledButton } from './FormButton.styles';

type Props = {
  type: 'submit' | 'reset' | 'button';
  isLoading: boolean;
};

const FormButton = ({ type, isLoading }: Props) => {
  return <StyledButton type={type}>{isLoading ? <LoadingSpinner /> : 'Wyślij'}</StyledButton>;
};

export default FormButton;
