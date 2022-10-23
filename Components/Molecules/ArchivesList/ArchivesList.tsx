import styled from 'styled-components';

const StyledWrapper = styled.div`
  .archives {
    font-family: var(--font-primary);
    color: ${({ theme }) => theme.color.text.primary};
    &__heading {
      font-size: clamp(1.75rem, 2vw, 1.75rem);
      font-weight: 600;
    }
    &__list {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__list-item {
      font-size: 1.125rem;
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
      font-size: 1rem;
      font-weight: 600;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.text.accentSecondaryLightHover};
      }
    }
  }
`;

const ArchivesList = () => (
  <StyledWrapper>
    <div className="archives">
      <h3 className="archives__heading">Archiwum</h3>
      <ul className="archives__list">
        <li className="archives__list-item">sierpień 2022</li>
        <li className="archives__list-item">lipiec 2022</li>
        <li className="archives__list-item">czerwiec 2022</li>
        <li className="archives__list-item">maj 2022</li>
        <li className="archives__list-item">kwiecień 2022</li>
      </ul>
      <button className="archives__load-btn">Więcej....</button>
    </div>
  </StyledWrapper>
);

export default ArchivesList;
