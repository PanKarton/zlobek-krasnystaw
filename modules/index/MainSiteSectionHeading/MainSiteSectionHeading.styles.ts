import styled from 'styled-components';

export const StyledHeading = styled.h3`
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.contrast};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.text3XL};
  line-height: ${({ theme }) => theme.lineHeight.text3XL};
  @media screen and (min-width: 96.875rem) {
    font-size: ${({ theme }) => theme.fontSize.text4XL};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
  }
  .text-pink {
    color: ${({ theme }) => theme.color.accentSecondaryDarker};
  }
`;
