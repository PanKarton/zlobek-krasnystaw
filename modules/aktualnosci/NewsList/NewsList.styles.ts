import styled from 'styled-components';

export const StyledWrapper = styled.div`
.no-posts-message {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    h3 {
      font-size: ${({ theme }) => theme.fontSize.textXL};
      color: ${({ theme }) => theme.color.accentPrimaryDarker};
      font-weight: 500;
      @media screen and (min-width: 96.875rem) {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      @media screen and (min-width: 96.875rem) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
      }
    }
  }
`;

export const StyledList = styled.ul`
  & > * + * {
    position: relative;
    margin-top: 5rem;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      top: -2.5rem;
      border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
    }
  }
`;
