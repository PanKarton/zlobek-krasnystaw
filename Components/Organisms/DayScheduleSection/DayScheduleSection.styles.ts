import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding-block: 4rem 9rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  .flex-wrapper {
    display: flex;
    align-items: center;
    gap: 10rem;
    ul {
      li + li {
        margin-top: 1rem;
      }
      li {
        p {
          font-size: ${({ theme }) => theme.fontSize.textLG};
          .hour-span {
            font-weight: 600;
          }
        }
      }
    }
    .img-wrapper {
      position: relative;
      width: 20rem;
      aspect-ratio: 0.82;
    }
  }
`;
