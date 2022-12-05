import { StyledButton } from './ArchivesListItem.styles';
import { MonthData } from '../../../helpers/getMonthsSinceDate';
import { useNewsPosts } from 'providers/NewsPostsProvider';

type Props = {
  monthData: MonthData;
};

export const ArchivesListItem = ({ monthData }: Props) => {
  const { getPostsByMonth } = useNewsPosts();

  const handleLoadPosts = () => {
    getPostsByMonth(monthData);
  };

  return <StyledButton onClick={handleLoadPosts}>{`${monthData.monthName} ${monthData.year}`}</StyledButton>;
};
