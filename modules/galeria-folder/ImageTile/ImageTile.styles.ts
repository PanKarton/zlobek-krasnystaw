import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0rem 0.625rem 1.25rem, rgba(0, 0, 0, 0.23) 0rem 0.375rem 0.375rem;
  img {
    transition: all ease-in-out 0.25s;
  }

  .hover-layer {
    position: absolute;
    inset: 0;
    background-color: hsla(0, 0%, 100%, 0.325);
    opacity: 0;
    transition: opacity ease-in-out 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.color.accentSecondary};
    }
  }

  &:hover {
    cursor: pointer;
    img {
      scale: 1.01;
    }
    .hover-layer {
      opacity: 1;
    }
  }
`;
