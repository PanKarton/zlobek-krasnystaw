import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { useNewsPosts } from 'providers/NewsPostsProvider';
import { ArchivesListItem } from '../ArchivesListItem/ArchivesListItem';
import { StyledWrapper } from './ArchivesList.styles';
import { useArchives } from './useArchives';

export const ArchivesList = () => {
  const { archivesErrorMessage } = useNewsPosts();
  const { months, isButtonVisible, areAllVisible, activeMonth, handleToggleMonthsList, handleLoadPostsOfMonth, handleLoadInitPosts } = useArchives();

  return (
    <StyledWrapper>
      <h3 className="heading">Archiwum</h3>
      <ul className="list">
        <li className="list-item">
          <ArchivesListItem isActive={activeMonth === null} onClick={() => handleLoadInitPosts()}>
            Najnowsze
          </ArchivesListItem>
        </li>
        {months &&
          months.map((month, index) => (
            <li key={index} className="list-item">
              <ArchivesListItem
                isActive={index === activeMonth}
                onClick={() => handleLoadPostsOfMonth(month, index)}>{`${month.monthName} ${month.year}`}</ArchivesListItem>
            </li>
          ))}
      </ul>
      {archivesErrorMessage && <p className="error-message">Ups, coś poszło nie tak. Spróbuj ponownie! :)</p>}
      {isButtonVisible && (
        <TextButton className="load-btn" handleClick={handleToggleMonthsList} text={areAllVisible ? 'Ukryj ponownie!' : 'Pokaż więcej!'} />
      )}
    </StyledWrapper>
  );
};
