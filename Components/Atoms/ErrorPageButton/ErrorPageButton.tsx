import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: block;
  border: 2px solid ${({ theme }) => theme.color.pageErrorTheme};
  padding: 0.675rem 3rem;
  border-radius: 9999px;
  color: inherit;
  font-weight: 500;
  transition: all 0.125s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.pageErrorTheme};
    color: ${({ theme }) => theme.color.white};
  }
`;

const ErrorPageButton = () => (
  <Link href="/" passHref>
    <StyledLink href="replace">
      <span>Strona główna</span>
    </StyledLink>
  </Link>
);

export default ErrorPageButton;
