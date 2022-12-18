import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 4rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.contrast};
  translate: 0.125rem 0;
  @media screen and (min-width: 96.875rem) {
    padding-bottom: 6rem;
  }
  @media screen and (min-width: 96.875rem) {
    padding-bottom: 9rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 4rem;
    @media screen and (min-width: 56.25rem) {
      flex-direction: row;
      gap: 8rem;
    }
    @media screen and (min-width: 96.875rem) {
      gap: 10rem;
    }
    ul {
      width: 100%;
      @media screen and (min-width: 56.25rem) {
        width: min(100%, 31rem);
      }
      li + li {
        margin-top: 1rem;
      }
      li {
        p {
          display: flex;
          gap: 0.5rem;
          font-size: ${({ theme }) => theme.fontSize.textBase};
          line-height: ${({ theme }) => theme.lineHeight.textBase};
          @media screen and (min-width: 56.25rem) {
            font-size: ${({ theme }) => theme.fontSize.textLG};
          }
          .hour-span {
            /* Prevents breaklines */
            white-space: nowrap;
            font-weight: 600;
          }
        }
      }
    }
    .img-wrapper {
      position: relative;
      width: 10rem;
      aspect-ratio: 0.82;
      @media screen and (min-width: 56.25rem) {
        width: 15rem;
      }
      @media screen and (min-width: 96.875rem) {
        width: 20rem;
      }
    }
  }
`;
