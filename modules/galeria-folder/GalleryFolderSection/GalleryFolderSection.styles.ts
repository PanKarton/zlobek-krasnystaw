import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: clamp(1.25rem, 4.5vw, 1.75rem);
  column-gap: clamp(1rem, 4vw, 1.5rem);
  list-style-type: none;
  margin-bottom: 4rem;
  margin-top: 1.5rem;
  @media screen and (min-width: 20rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 62.5rem) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 3rem;
    column-gap: 1.75rem;
  }
  @media screen and (min-width: 96.875rem) {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`;

export const PublishDate = styled.div`
  font-family: var(--font-primary);
  font-weight: 500;
  border-bottom: 0.0625rem solid #ccc;
  padding-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
`;
