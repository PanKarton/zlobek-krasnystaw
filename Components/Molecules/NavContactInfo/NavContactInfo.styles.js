import styled from 'styled-components';

export const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.gray500};
  padding-left: 1rem;
  margin-block: 2rem 1.5rem;
  .flex-wrapper {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  h2 {
    font-family: var(--font-primary);
    line-height: 1;
  }
  p {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
  }
  svg {
    color: ${({ theme }) => theme.color.pink};
  }
  & li > * {
    margin-top: 1rem;
  }
`;
