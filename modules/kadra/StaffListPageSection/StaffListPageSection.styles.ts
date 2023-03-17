import styled from 'styled-components';

export const StyledWrapper = styled.section`
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (min-width: 71.875rem) {
    translate: 0.125rem 0;
  }
  .list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p.description {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textBase};
      color: ${({ theme }) => theme.color.contast};
      font-weight: 400;
      letter-spacing: 0.0625rem;
      max-width: 85ch;
      @media screen and (min-width: 56.25rem) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
      }
    }
  }
`;
