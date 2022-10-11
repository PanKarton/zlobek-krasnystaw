import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;

const LoadingSpinner = () => (
  <StyledSpinnerWrapper>
    <AiOutlineLoading3Quarters />
  </StyledSpinnerWrapper>
);

export default LoadingSpinner;
