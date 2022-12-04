import { StyledButton } from './ArchivesListItem.styles';
import { MonthData } from '../../../helpers/getMonthsSinceDate';
import { useNewPosts } from 'providers/NewsPostsProvider';

type Props = {
  monthData: MonthData;
};

export const ArchivesListItem = ({ monthData }: Props) => {
  const { getPostsByMonth } = useNewPosts();

  return <StyledButton onClick={() => getPostsByMonth(monthData)}>{`${monthData.monthName} ${monthData.year}`}</StyledButton>;
};
