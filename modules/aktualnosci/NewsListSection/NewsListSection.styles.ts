import styled from 'styled-components';

export const Styledwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
  translate: 0.125rem 0;

  &:has(.no-posts-message) {
    padding-bottom: 3rem;
  }
  & > button {
    margin-top: 1rem;
  }
  .no-posts-message {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-family: var(--font-primary);
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
  @media screen and (min-width: 96.875rem) {
    flex-direction: row-reverse;

    &:has(.no-posts-message) {
      padding-bottom: 4rem;
    }
    padding-bottom: 8rem;
    gap: 10rem;
    & > button {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      translate: -95% 0;
    }
  }
`;
