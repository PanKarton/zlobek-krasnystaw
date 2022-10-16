import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 27rem;
  .submit-message {
    text-align: center;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.textDarkGray};
  }
  button {
    margin-top: auto;
  }
`;
