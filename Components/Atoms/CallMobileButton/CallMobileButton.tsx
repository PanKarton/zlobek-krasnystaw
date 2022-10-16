import React from 'react';
import { RiSmartphoneLine } from 'react-icons/ri';
import { StyledWrapper } from './CallmobileButton.styles';

const CallMobileButton: React.FC = () => (
  <StyledWrapper>
    <a href={`tel:${123456789}`} aria-label="Zadzwoń pod numer 123 456 789">
      123 456 789
    </a>
    <RiSmartphoneLine size="22px" color="#333333" />
  </StyledWrapper>
);

export default CallMobileButton;
