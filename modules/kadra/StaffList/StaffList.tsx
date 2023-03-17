import { Employee } from 'types/staffResponse';
import { StyledListWrapper } from './StaffList.styles';

type Props = {
  heading: 'Dyrektor' | 'Dyrektorzy' | 'Pracownicy administracji i obsługi' | 'Opekunki';
  isDirector?: boolean;
  staffArray: Employee[];
};

export const StaffList = ({ heading, staffArray, isDirector }: Props) => (
  <StyledListWrapper>
    <h3 className={isDirector ? 'big' : ''}>{`${heading}:`}</h3>
    <ul>
      {staffArray.map(({ imieNazwisko: name, stanowisko: job, id }) => (
        <li key={id}>
          {job ? (
            <p>
              {name} - <span className="job">{job}</span>
            </p>
          ) : (
            <p className={isDirector ? 'big' : ''}>{name}</p>
          )}
        </li>
      ))}
    </ul>
  </StyledListWrapper>
);
