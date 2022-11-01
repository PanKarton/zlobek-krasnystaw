import styled from 'styled-components';

export const StyledListWrapper = styled.div`
  font-family: var(--font-primary);

  h3 {
    color: ${({ theme }) => theme.color.text.accentTertiary};
    font-size: ${({ theme }) => theme.fontSize.text3XL};
    font-weight: 500;
  }
  ul {
    margin-top: 1rem;
    li + li {
      margin-top: 1rem;
    }
  }
  p {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    .name {
      font-weight: 500;
    }
  }
`;
