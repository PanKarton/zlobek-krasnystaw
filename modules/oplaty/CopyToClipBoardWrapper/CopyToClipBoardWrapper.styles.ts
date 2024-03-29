import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f8f8;
  border-radius: 0.3125rem;
  overflow: hidden;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 500;
  @media screen and (min-width: 28.125rem) {
    flex-direction: row;
    width: max-content;
  }
  @media screen and (min-width: 56.25rem) {
    font-size: ${({ theme }) => theme.fontSize.textLG};
  }
  & > span {
    text-align: center;
    padding-block: 0.875rem;
    padding-inline: 0.5rem;
    @media screen and (min-width: 28.125rem) {
      padding-inline: 2rem;
    }
  }
  button {
    border: none;
    padding-block: 0.75rem;
    background-color: ${({ theme }) => theme.color.accentPrimaryDarker};
    color: ${({ theme }) => theme.color.primary};
    font-weight: 400;
    text-align: center;
    font-size: inherit;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 28.125rem) {
      padding-inline: 1rem;
      padding-block: 0;
    }
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.accentPrimaryDarkerLightHover};
    }
  }
`;
