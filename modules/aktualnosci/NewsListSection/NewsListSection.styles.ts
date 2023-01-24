import styled from 'styled-components';

export const Styledwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
  translate: 0.125rem 0;

  &:has(.no-posts-message),
  &:has(.spinner-wrapper) {
    padding-bottom: 3rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 100%;
    gap: 3rem;

    &:has(.no-posts-message) {
      align-items: center;
      justify-content: center;
    }
    &:has(.spinner-wrapper) {
      justify-content: center;
    }
    .spinner-wrapper {
      align-self: center;
      svg {
        color: ${({ theme }) => theme.color.accentPrimaryDarker};
        font-size: 2rem;
      }
    }
    button {
      align-self: center;
    }
    @media screen and (min-width: 96.875rem) {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 62.5rem) {
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 96.875rem) {
    flex-direction: row-reverse;
    padding-bottom: 4rem;
    gap: 10rem;
    &:has(.spinner-wrapper),
    &:has(.no-posts-message) {
      padding-bottom: 3rem;
    }
  }
`;
