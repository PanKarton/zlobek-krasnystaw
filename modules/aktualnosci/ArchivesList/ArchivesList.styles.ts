import styled from 'styled-components';

export const StyledWrapper = styled.div`
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
  @media screen and (min-width: 1550px) {
    border-bottom: none;
    padding-bottom: 0;
  }
  .archives {
    font-family: var(--font-primary);
    color: ${({ theme }) => theme.color.contrast};
    &__heading {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      font-weight: 600;
    }
    &__list {
      margin-top: 0.75rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 1.5rem;
      row-gap: 0.75rem;
      @media screen and (min-width: 1550px) {
        flex-direction: column;
      }
    }

    &__list-item {
      position: relative;
      /* Pink dots */
      &::before {
        content: '';
        display: none;
        position: absolute;
        top: 55%;
        translate: 0 -50%;
        left: -0.75rem;
        width: 0.375rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.accentSecondaryDarker};
        @media screen and (min-width: 1550px) {
          display: block;
        }
      }
      /* Vertical lines dividers */
      &:not(:last-of-type)::after {
        content: '';
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        right: -0.75rem;
        height: 1rem;
        width: 1px;
        background-color: ${({ theme }) => theme.color.contrast};
        @media screen and (min-width: 1550px) {
          display: none;
        }
      }
    }
    .error-message {
      color: ${({ theme }) => theme.color.error};
      font-weight: 500;
      margin-top: 0.5rem;
    }

    &__load-btn {
      margin-top: 1rem;
      border: none;
    }
  }
`;
