import styled from 'styled-components';

export const StyledCirculareWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px dashed #555;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.color.primary};
  .image-wrapper {
    position: relative;
    width: 95%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
  &:nth-child(1) {
    height: 50%;
    bottom: 0;
    left: 0;
    z-index: 1;
    text-align: left;
  }
  &:nth-child(2) {
    height: 90%;
    top: 0;
    left: 40%;
    translate: -50% 0;
  }
  &:nth-child(3) {
    height: 60%;
    right: 0;
    bottom: 10%;
  }
`;
