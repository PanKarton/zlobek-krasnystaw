import styled from 'styled-components';

export const StyledWrapper = styled.section`
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    p.description {
      font-family: var(--font-primary);
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textBase};
      color: ${({ theme }) => theme.color.contast};
      font-weight: 400;
      letter-spacing: 1px;
      max-width: 85ch;
      @media screen and (min-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
      }
    }
  }
`;
