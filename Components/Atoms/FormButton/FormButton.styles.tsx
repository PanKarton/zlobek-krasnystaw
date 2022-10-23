import styled from 'styled-components';

type Props = {
  type: 'submit' | 'reset' | 'button';
};

export const StyledButton = styled.button<Props>`
  width: 100%;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.color.button.formSubmit};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 1.25rem;
  font-family: var(--font-primary);
  font-weight: 500;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.button.formSubmitHover};
    color: ${({ theme }) => theme.color.text.primaryLightHover};
  }
`;
