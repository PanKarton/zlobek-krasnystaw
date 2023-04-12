import styled from 'styled-components';

export const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  line-height: ${({ theme }) => theme.lineHeight.text2XL};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-bottom: 3rem;

  #a11y-podmiot,
  #a11y-data-publikacja,
  #a11y-data-aktualizacja,
  #a11y-data-sporzadzenie,
  #a11y-audytor,
  #a11y-osoba,
  #a11y-email,
  #a11y-telefon {
    font-weight: 600;
  }

  h2,
  a {
    color: ${({ theme }) => theme.color.accentPrimaryDarker};
  }
  a:hover {
    color: ${({ theme }) => theme.color.accentPrimaryLighter};
  }
`;
