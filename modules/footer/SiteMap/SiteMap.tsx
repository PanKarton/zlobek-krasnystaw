import Link from 'next/link';
import styled from 'styled-components';

export const StyledList = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  padding-bottom: 2rem;
  padding-left: 1.75rem;
  grid-area: 2 / 1 / 3 / 2;
  column-gap: 2rem;
  li {
    /* border: 1px solid blue; */
    flex-basis: 100%;
    @media screen and (min-width: 34rem) {
      flex-basis: calc(50% - 1rem);
    }
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

export const SiteMap = () => {
  return (
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
  );
};
