import { getMonthsSinceDate } from 'helpers/getMonthsSinceDate';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesListItem } from '../ArchivesListItem/ArchivesListItem';
import { StyledWrapper } from './ArchivesList.styles';
import { useNewPosts } from 'providers/NewsPostsProvider';
import { useState } from 'react';

export const ArchivesList = () => {
  const [areAllVisible, setAreAllVisible] = useState(false);
  const { archivesErrorMessage } = useNewPosts();

  const releaseDate = new Date(getEnvVariable(process.env.NEXT_PUBLIC_RELEASE_DATE));
  const monthsData = getMonthsSinceDate(releaseDate);

  const months = areAllVisible ? monthsData : monthsData.slice(0, 5);
  const isButtonVisible = monthsData.length >= 6;

  return (
    <StyledWrapper>
      <h3 className="heading">Archiwum</h3>
      <ul className="list">
        {monthsData &&
          months.map((month, index) => (
            <li key={index} className="list-item">
              <ArchivesListItem monthData={month} />
            </li>
          ))}
      </ul>
      {archivesErrorMessage && <p className="error-message">Ups, coś poszło nie tak. Spróbuj ponownie! :)</p>}
      {isButtonVisible && (
        <TextButton
          className="load-btn"
          handleClick={() => setAreAllVisible((prevValue) => !prevValue)}
          text={areAllVisible ? 'Ukryj ponownie!' : 'Pokaż więcej!'}
        />
      )}
    </StyledWrapper>
  );
};
