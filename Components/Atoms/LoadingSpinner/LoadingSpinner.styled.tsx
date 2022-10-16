import styled from 'styled-components';

export const StyledSpinnerWrapper = styled.div`
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
