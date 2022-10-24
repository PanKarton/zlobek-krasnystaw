import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .archives {
    font-family: var(--font-primary);
    color: ${({ theme }) => theme.color.text.primary};
    &__heading {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      font-weight: 600;
    }
    &__list {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__list-item {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      font-weight: 500;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 55%;
        translate: 0 -50%;
        left: -0.75rem;
        width: 0.375rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.text.accentPrimary};
      }
    }

    &__load-btn {
      margin-top: 0.5rem;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.color.text.accentSecondary};
      font-family: inherit;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 600;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.text.accentSecondaryLightHover};
      }
    }
  }
`;
