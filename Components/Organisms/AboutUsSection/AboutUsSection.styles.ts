import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;

  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 3rem 8rem;
    @media screen and (min-width: 1187px) {
      padding-block: 0rem 8rem;
    }
    @media screen and (min-width: 1550px) {
      padding-block: 3rem 10rem;
      justify-content: flex-start;
      gap: 8rem;
    }
    .images-wrapper {
      display: none;
      width: 513px;
      aspect-ratio: 1.3;
      position: relative;
      @media screen and (min-width: 1000px) {
        display: block;
      }
      @media screen and (min-width: 1550px) {
        width: 713px;
        height: 550px;
      }
      .sun-wrapper {
        position: absolute;
        height: 80px;
        aspect-ratio: 1.16;
        top: 0;
        right: 15%;
        @media screen and (min-width: 1150px) {
          height: 150px;
        }
        @media screen and (min-width: 1550px) {
          height: 200px;
        }
      }
    }
  }
  .stars-background-wrapper {
    position: absolute;
    inset: 0% 0 5% 0;
    z-index: -1;
  }
  .bottom-wave-wrapper {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    aspect-ratio: 15.28;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  max-width: 500px;

  h2 {
    max-width: 400px;
  }

  .about-us-paragraph {
    @media screen and (min-width: 700px) {
      margin-bottom: 0;
    }
  }

  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      align-items: baseline;
      gap: 0.375rem;
      .snail-image-wrapper {
        min-width: 30px;
        height: 17px;
        position: relative;
      }
    }
  }
`;
