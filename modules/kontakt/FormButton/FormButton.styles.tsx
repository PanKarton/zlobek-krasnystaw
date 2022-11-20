import styled from 'styled-components';

type Props = {
  type: 'submit' | 'reset' | 'button';
};

export const StyledButton = styled.button<Props>`
  width: 100%;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.color.accentPrimary};
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-family: var(--font-primary);
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.accentPrimaryLighter};
    color: ${({ theme }) => theme.color.contrastLightHover};
  }
`;
