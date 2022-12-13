import styled from 'styled-components';

export const StyledWrapper = styled.div`
  aspect-ratio: 1.7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all ease-in-out 0.25s;
  .img-wrapper {
    position: relative;
    background-color: #aaa;
    height: 100%;
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
    span {
      font-family: var(--font-primary);
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.textLG};
      font-weight: 500;
    }
  }
  &:hover {
    cursor: pointer;
    scale: 1.005;
    .img-wrapper::after {
      opacity: 1;
    }
  }
`;
