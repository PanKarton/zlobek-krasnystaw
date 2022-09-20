import { RiSmartphoneLine } from 'react-icons/ri';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  &:hover > svg,
  &:hover > a {
    color: ${({ theme }) => theme.color.pink} !important;
  }
  a {
    font-family: var(--font-secondary);
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray300};
    font-size: 1.25rem;
    &:active {
      color: ${({ theme }) => theme.color.pink};
    }
  }
  svg {
    margin: 0;
  }
`;

const CallMobileButton = () => (
  <StyledWrapper>
    <a href={`tel:${123456789}`}>123 456 789</a>
    <RiSmartphoneLine size="22px" color="#333333" />
  </StyledWrapper>
);

export default CallMobileButton;
