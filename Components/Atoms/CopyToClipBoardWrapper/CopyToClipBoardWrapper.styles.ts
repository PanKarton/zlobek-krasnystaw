import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  background-color: #f9f8f8cf;
  border-radius: 5px;
  overflow: hidden;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 500;
  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
  @media screen and (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.textLG};
  }
  span {
    flex: 1;
    text-align: center;
    padding-block: 0.875rem;
  }
  button {
    border: none;
    padding-inline: 1rem;
    padding-block: 0.75rem;
    background-color: ${({ theme }) => theme.color.text.accentTertiary};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
    text-align: center;
    font-size: inherit;

    font-family: var(--font-primary);

    @media screen and (min-width: 450px) {
      padding-block: 0;
    }
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.text.accentTertiaryLightHover};
    }
  }
`;
