import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.tilesSectionBackground};
  padding-top: 2rem;
  padding-bottom: clamp(5rem, 21vw, 12rem);
  padding-inline: 1rem;
  .max-width {
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      display: block;
      width: 100%;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.sectionHeading};
      color: ${({ theme }) => theme.color.gray700};
      font-family: var(--font-primary);
      font-weight: 600;
      .pink-text {
        color: ${({ theme }) => theme.color.pink};
      }
    }
    .flex-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(1.5rem, 5vw, 3rem);
      .tiles-wrapper {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(1rem, 2.5vw, 1.5rem);
        .tile-wrapper {
          width: min(calc(50% - 1rem), 21rem);
          aspect-ratio: 225/315;
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }
  }
  /* Blue wave divider */
  .bottom-waves-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    aspect-ratio: 11.5;
  }
`;
