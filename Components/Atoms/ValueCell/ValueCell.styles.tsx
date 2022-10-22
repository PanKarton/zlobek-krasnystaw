import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > div {
    height: 8em;
    width: 8rem;
    position: relative;
    @media screen and (min-width: 700px) {
      height: 10rem;
      width: 10rem;
    }
  }
  & > span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    font-weight: 500;
    text-align: center;
    line-height: 1;
    @media screen and (min-width: 700px) {
      font-size: 2rem;
    }
  }
`;
