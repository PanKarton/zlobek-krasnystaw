import styled from 'styled-components';

export const StyledWrapper = styled.div`
  --main-size: 16px;
  width: var(--main-size);
  height: var(--main-size);

  .check-icon {
    width: var(--main-size);
    height: var(--main-size);
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 1px solid #4caf50;

    &::before {
      top: 3px;
      left: -2px;
      width: calc(var(--main-size) * 3 / 8);
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 37.5%;
      width: calc(var(--main-size) * 6 / 8);
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: '';
      width: calc(var(--main-size) * 10 / 8);
      position: absolute;
      background: #ffffff;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5.25%;
      background-color: #4caf50;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 57.5%;
        left: 17.5%;
        width: calc(var(--main-size) * 2.5 / 8);
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 47.5%;
        right: 10%;
        width: calc(var(--main-size) * 4.7 / 8);
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -5%;
      left: -5%;
      z-index: 10;
      width: var(--main-size);
      height: var(--main-size);
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 1px solid rgba(76, 175, 80, 0.5);
    }

    .icon-fix {
      top: 10%;
      width: 6.25%;
      left: 32.5%;
      z-index: 1;
      width: calc(var(--main-size) * 8.5 / 8);
      position: absolute;
      transform: rotate(-45deg);
      background-color: #ffffff;
    }
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }

  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: calc(var(--main-size) * 1.9 / 8);
    }
    54% {
      width: 0;
      left: 1px;
      top: calc(var(--main-size) * 1.9 / 8);
    }
    70% {
      width: 62.5%;
      left: -10%;
      top: calc(var(--main-size) * 3.7 / 8);
    }
    84% {
      width: 21.25%;
      left: 25%;
      top: calc(var(--main-size) * 4.8 / 8);
    }
    100% {
      width: 31.25%;
      left: 17.5%;
      top: 56.25%;
    }
  }

  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 57.5%;
      top: 67.5%;
    }
    65% {
      width: 0;
      right: 57.5%;
      top: 67.5%;
    }
    84% {
      width: 68.75%;
      right: 0;
      top: 43.75%;
    }
    100% {
      width: 58.75%;
      right: 10%;
      top: 47.5%;
    }
  }
`;
