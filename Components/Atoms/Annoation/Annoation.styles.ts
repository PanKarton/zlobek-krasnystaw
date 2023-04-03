import styled from 'styled-components';

type WrapperProps = {
  isPink?: boolean;
};

export const StyledWrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, isPink }) => (isPink ? theme.color.accentSecondary : theme.color.contrast)};
  font-size: ${({ theme }) => theme.fontSize.textLG};

  &:hover > p {
    opacity: 1;
  }
`;
export const StyledMessage = styled.p`
  position: absolute;
  opacity: 0;
  top: -0.25rem;
  right: 0;
  translate: 0 -100%;
  transition: opacity 0.25s ease-in-out;
  background-color: ${({ theme }) => theme.color.primary};
  min-width: 16rem;
  border: 1px solid #333;
  border-radius: 0.125rem;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 600;
  color: ${({ theme }) => theme.color.contrast};
`;
