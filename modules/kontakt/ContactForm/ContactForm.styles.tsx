import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: min(100%, 40rem);
  @media screen and (min-width: 56.25rem) {
    width: 100%;
  }
  div.input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.color.contrast};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    font-weight: 500;
    gap: 0.5rem;
    margin-top: 0.25rem;
    .error-wrapper {
      color: ${({ theme }) => theme.color.error};
    }
  }
  .submit-message,
  .error-message {
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    font-weight: 500;
    color: ${({ theme }) => theme.color.contrast};
  }
`;
