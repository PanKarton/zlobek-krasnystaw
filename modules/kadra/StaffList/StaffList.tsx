import { Employee } from 'types/staffResponse';
import { StyledListWrapper, StyledParagraph } from './StaffList.styles';

type Props = {
  heading: 'Dyrektor' | 'Pracownicy administracji i obsługi' | 'Opekunki';
  isDirector?: boolean;
  staffArray?: Employee[];
  headmasterName?: string;
};

export const StaffList = ({ heading, staffArray, isDirector, headmasterName }: Props) => (
  <StyledListWrapper>
    <h3 className={isDirector ? 'big' : ''}>{`${heading}:`}</h3>
    {staffArray && (
      <ul>
        {staffArray.map(({ imieNazwisko: name, stanowisko: job, id }) => (
          <li key={id}>
            {job ? (
              <StyledParagraph>
                {name} - <span className="job">{job}</span>
              </StyledParagraph>
            ) : (
              <StyledParagraph>{name}</StyledParagraph>
            )}
          </li>
        ))}
      </ul>
    )}
    {headmasterName && <StyledParagraph className="big">{headmasterName}</StyledParagraph>}
  </StyledListWrapper>
);
