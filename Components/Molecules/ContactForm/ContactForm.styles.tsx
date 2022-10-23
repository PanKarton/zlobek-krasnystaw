import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 33rem;
  width: min(100%, 40rem);
  @media screen and (min-width: 900px) {
    width: 100%;
  }
  label {
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
  .submit-message,
  .error-message {
    text-align: center;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text.primary};
  }
  button {
    margin-top: auto;
  }
`;
