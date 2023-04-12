import { RiSmartphoneLine } from 'react-icons/ri';
import { StyledWrapper } from './CallmobileButton.styles';
import { useContactData } from 'providers/ContactDataProvider';

export const CallMobileButton = () => {
  const { numerTelefonu: phoneNumber } = useContactData();

  return (
    <StyledWrapper>
      <a href={`tel:${123456789}`} aria-label={`Zadzwoń pod numer ${phoneNumber}`}>
        {phoneNumber}
      </a>
      <RiSmartphoneLine size="22px" color="#333333" />
    </StyledWrapper>
  );
};
