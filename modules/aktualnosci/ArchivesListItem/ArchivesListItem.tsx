import { StyledButton } from './ArchivesListItem.styles';
import { MonthData } from '../../../helpers/getMonthsSinceDate';
import { useNewsPosts } from 'providers/NewsPostsProvider';

type Props = {
  monthData: MonthData;
  isActive?: boolean;
  monthIndex: number;
  setActiveMonth: () => void;
};

export const ArchivesListItem = ({ monthData, isActive, setActiveMonth }: Props) => {
  const { getPostsByMonth } = useNewsPosts();

  const handleLoadPosts = () => {
    getPostsByMonth(monthData);
    setActiveMonth();
  };

  return <StyledButton className={isActive ? 'active' : ''} onClick={handleLoadPosts}>{`${monthData.monthName} ${monthData.year}`}</StyledButton>;
};
