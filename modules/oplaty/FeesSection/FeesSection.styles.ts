import styled from 'styled-components';

export const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  font-weight: 500;
  padding-bottom: 4rem;
  @media screen and (min-width: 56.25rem) {
    padding-bottom: 5.5rem;
    translate: 0.125rem 0;
  }

  h3 {
    color: ${({ theme }) => theme.color.accentPrimaryDarker};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: inherit;
    @media screen and (min-width: 56.25rem) {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  .fees-wrapper {
    margin-top: 1.25rem;
    @media screen and (min-width: 56.25rem) {
      margin-top: 1rem;
    }
    & > p {
      margin-top: 0.75rem;
      @media screen and (min-width: 56.25rem) {
        margin-top: 1rem;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      @media screen and (min-width: 56.25rem) {
        gap: 1rem;
      }

      li {
        p {
          font-size: ${({ theme }) => theme.fontSize.Base};
          @media screen and (min-width: 56.25rem) {
            font-size: ${({ theme }) => theme.fontSize.textLG};
          }
        }
      }
    }
  }
`;

export const BankAccountData = styled.div`
  margin-top: 2.5rem;
  .transfer-pattern {
    line-height: ${({ theme }) => theme.lineHeight.textLG};
  }
  .account-number-label {
    margin-bottom: 0.25rem;
  }
  & > * + * {
    margin-top: 1rem;
  }
`;
