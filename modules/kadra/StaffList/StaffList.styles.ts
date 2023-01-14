import styled from 'styled-components';

export const StyledListWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  h3 {
    color: ${({ theme }) => theme.color.accentPrimaryDarker};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 500;
    @media screen and (min-width: 56.25rem) {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
    &.big {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      @media screen and (min-width: 56.25rem) {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
  }
  ul {
    margin-top: 1rem;
    li + li {
      margin-top: 1rem;
    }
    li {
      p {
        color: ${({ theme }) => theme.color.contrast};
        font-size: ${({ theme }) => theme.fontSize.textBase};
        font-weight: 500;
        @media screen and (min-width: 56.25rem) {
          font-size: ${({ theme }) => theme.fontSize.textXL};
        }
        .job {
          font-weight: 400;
        }
        &.big {
          font-size: ${({ theme }) => theme.fontSize.textXL};
          @media screen and (min-width: 56.25rem) {
            font-size: ${({ theme }) => theme.fontSize.text2XL};
          }
        }
      }
    }
  }
`;
