import styled from 'styled-components';

export const StyledWrapper = styled.div`
  border-bottom: 0.0625rem solid #aaa;
  padding-bottom: 1rem;
  @media screen and (min-width: 96.875rem) {
    border-bottom: none;
    padding-bottom: 0;
    width: 12.5rem;
  }
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.contrast};
  .heading {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    font-weight: 600;
  }
  .list {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 0.75rem;
    @media screen and (min-width: 96.875rem) {
      flex-direction: column;
    }
  }

  .list-item {
    position: relative;
    /* Pink dots */
    &::before {
      content: '';
      display: none;
      position: absolute;
      top: 48%;
      translate: 0 -50%;
      left: -0.75rem;
      width: 0.375rem;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.accentSecondaryDarker};
      @media screen and (min-width: 96.875rem) {
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
      width: 0.0625rem;
      background-color: ${({ theme }) => theme.color.contrast};
      @media screen and (min-width: 96.875rem) {
        display: none;
      }
    }
  }
  .error-message {
    color: ${({ theme }) => theme.color.error};
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .load-btn {
    margin-top: 0.75rem;
    border: none;
  }
`;
