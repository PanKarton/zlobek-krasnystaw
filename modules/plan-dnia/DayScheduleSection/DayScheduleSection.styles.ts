import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 4rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
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
    @media screen and (min-width: 62.5rem) {
      flex-direction: row;
      gap: 8rem;
    }
    @media screen and (min-width: 96.875rem) {
      gap: 10rem;
    }
    ul {
      width: 100%;
      @media screen and (min-width: 62.5rem) {
        width: min(100%, 34rem);
      }
      li + li {
        margin-top: 1rem;
      }
      li {
        p {
          display: grid;
          grid-template-columns: 7rem 0.25rem 1fr;
          gap: 0.5rem;
          font-size: ${({ theme }) => theme.fontSize.textBase};
          line-height: ${({ theme }) => theme.lineHeight.textBase};
          @media screen and (min-width: 62.5rem) {
            font-size: ${({ theme }) => theme.fontSize.textLG};
          }
          .hour-span {
            grid-column: 1;
            /* Prevents breaklines */
            white-space: nowrap;
            font-weight: 600;
            text-align: right;
          }
          .divider {
            grid-column: 2;
          }
          .task-name {
            grid-column: 3;
            display: block;
          }
        }
      }
    }
    .img-wrapper {
      position: relative;
      width: 10rem;
      aspect-ratio: 0.82;
      @media screen and (min-width: 62.5rem) {
        width: 15rem;
      }
      @media screen and (min-width: 96.875rem) {
        width: 20rem;
      }
    }
  }
`;
