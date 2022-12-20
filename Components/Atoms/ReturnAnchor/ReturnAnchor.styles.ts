import styled from 'styled-components';

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 500;
`;
export const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    translate: 0 0.0625rem;
  }
  &:hover {
    cursor: pointer;
    span,
    svg {
      color: ${({ theme }) => theme.color.accentPrimary};
    }
  }
`;
