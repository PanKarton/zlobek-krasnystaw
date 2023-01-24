import { StyledButton } from './ArchivesListItem.styles';
import { MonthData } from '../../../helpers/getMonthsSinceDate';

type Props = {
  children: string;
  isActive: boolean;
  onClick: () => void;
};

export const ArchivesListItem = ({ isActive, onClick, children }: Props) => {
  return (
    <StyledButton className={isActive ? 'active' : ''} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
