import styled from 'styled-components';
export const StyledSection = styled.section`
  font-family: var(--font-primary);
  position: relative;
  padding-block: 2rem 4rem;
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 500;
  @media screen and (min-width: 900px) {
    padding-block: 2.5rem 5.5rem;
  }

  .max-width-1440 {
    /* For some reason context was 2px  to right compared to section heading with the same padding  */
    position: relative;
    left: -2px;
  }

  h3 {
    color: ${({ theme }) => theme.color.text.accentTertiary};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: inherit;
    @media screen and (min-width: 900px) {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  .fees-wrapper {
    margin-top: 1.25rem;
    @media screen and (min-width: 900px) {
      margin-top: 1rem;
    }
    & > p {
      margin-top: 0.75rem;
      @media screen and (min-width: 900px) {
        margin-top: 1rem;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      @media screen and (min-width: 900px) {
        gap: 1rem;
      }

      li {
        p {
          font-size: ${({ theme }) => theme.fontSize.Base};
          @media screen and (min-width: 900px) {
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
