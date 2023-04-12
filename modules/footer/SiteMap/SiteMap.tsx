import Link from 'next/link';
import styled from 'styled-components';

export const StyledList = styled.ul`
  /* border: 1px solid red; */
  display: grid;
  row-gap: 0.5rem;
  padding-bottom: 2rem;
  grid-area: 2 / 1 / 3 / 2;

  @media screen and (min-width: 34rem) {
    grid-template-columns: 15rem 1fr;
    row-gap: 1rem;
    padding-bottom: 0rem;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.accentSecondaryDarker};
  }
`;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.text2XL};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  margin-bottom: 0.5rem;
  @media screen and (min-width: 34rem) {
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 62.5rem) {
    font-size: ${({ theme }) => theme.fontSize.text3XL};
    margin-bottom: 0.5rem;
  }
`;

export const SiteMap = () => {
  return (
    <div>
      <StyledHeading>Mapa strony</StyledHeading>
      <StyledList>
        <li>
          <StyledLink href="">O nas</StyledLink>
        </li>
        <li>
          <StyledLink href="aktualnosci">Aktualności</StyledLink>
        </li>
        <li>
          <StyledLink href="galeria">Galeria</StyledLink>
        </li>
        <li>
          <StyledLink href="rekrutacja">Rekrutacja</StyledLink>
        </li>
        <li>
          <StyledLink href="wyprawka">Wyprawka</StyledLink>
        </li>
        <li>
          <StyledLink href="oplaty">Opłaty</StyledLink>
        </li>
        <li>
          <StyledLink href="plan-dnia">Plan dnia</StyledLink>
        </li>
        <li>
          <StyledLink href="kadra">Nasza kadra</StyledLink>
        </li>
        <li>
          <StyledLink href="rodo">Ochrona danych</StyledLink>
        </li>
        <li>
          <StyledLink href="kontakt">Kontakt</StyledLink>
        </li>
        <li>
          <StyledLink href="deklaracja-dostepnosci">Deklaracja dostępności</StyledLink>
        </li>
      </StyledList>
    </div>
  );
};
