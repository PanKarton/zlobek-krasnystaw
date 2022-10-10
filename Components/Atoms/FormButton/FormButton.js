import styled from 'styled-components';

export const FormButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.textDarkGray};
  font-size: 1.25rem;
  font-family: var(--font-primary);
  font-weight: 500;
  border: none;
  padding-block: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.blueLightHover};
    color: ${({ theme }) => theme.color.textDarkGrayHover};
  }
`;
