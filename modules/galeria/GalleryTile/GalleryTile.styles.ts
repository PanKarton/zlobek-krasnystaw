import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  aspect-ratio: 1.7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0rem 0.625rem 1.25rem, rgba(0, 0, 0, 0.23) 0rem 0.375rem 0.375rem;
  transition: all ease-in-out 0.25s;

  .date-wrapper {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background-color: ${({ theme }) => theme.color.primary};
    font-family: var(--font-primary);
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 0 0 0.75rem 0;
  }
  .img-wrapper {
    position: relative;
    background-color: #aaa;
    height: 100%;
    img {
      transition: scale ease-in-out 0.25s;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: hsla(0, 0%, 100%, 0.125);
      opacity: 0;
      transition: opacity ease-in-out 0.25s;
    }
  }
  .name-wrapper {
    flex-basis: 4.25rem;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 0.25rem;
    span {
      font-family: var(--font-primary);
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.textLG};
      font-weight: 500;
      max-width: 25ch;
      text-align: center;
    }
  }
  &:hover {
    cursor: pointer;
    .img-wrapper img {
      scale: 1.01;
    }
    .img-wrapper::after {
      opacity: 1;
    }
  }
`;
