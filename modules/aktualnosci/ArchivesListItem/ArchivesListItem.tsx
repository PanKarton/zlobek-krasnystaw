import { StyledButton } from './ArchivesListItem.styles';

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
