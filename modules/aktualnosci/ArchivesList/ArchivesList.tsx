import { getMonthsSinceDate } from 'helpers/getMonthsSinceDate';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesListItem } from '../ArchivesListItem/ArchivesListItem';
import { StyledWrapper } from './ArchivesList.styles';
import { useNewPosts } from 'providers/NewsPostsProvider';

export const ArchivesList = () => {
  const { archivesErrorMessage } = useNewPosts();

  const RELEASE_DATE = new Date(getEnvVariable(process.env.NEXT_PUBLIC_RELEASE_DATE));
  const monthsData = getMonthsSinceDate(RELEASE_DATE);

  return (
    <StyledWrapper>
      <div className="archives">
        <h3 className="archives__heading">Archiwum</h3>
        <ul className="archives__list">
          {monthsData &&
            monthsData.map((month, index) => (
              <li key={index} className="archives__list-item">
                <ArchivesListItem monthData={month} />
              </li>
            ))}
        </ul>
        {archivesErrorMessage && <p className="error-message">Ups, coś poszło nie tak. Spróbuj ponownie! :)</p>}
      </div>
    </StyledWrapper>
  );
};
