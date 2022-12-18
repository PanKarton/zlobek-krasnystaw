import styled from 'styled-components';

const StyledLoader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  #loader {
    position: absolute;
    top: 50%;
    left: 40%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
  }
  .loader-dot {
    width: 1.5rem;
    height: 1.5rem;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 1s infinite;
  }
  .loader-dot:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
  }
  .loader-dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
  }
  .loader-dot:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
  }
  .loader-dot:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
  }
  .loader-dot:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
  }
  @keyframes slide {
    0% {
      scale: 1;
    }
    50% {
      opacity: 0.3;
      scale: 2;
    }
    100% {
      scale: 1;
    }
  }
`;

export const FallbackLoader = () => {
  return (
    <>
      <StyledLoader>
        <div id="loader">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
      </StyledLoader>
    </>
  );
};
