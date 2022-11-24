import { StyledListWrapper } from './StaffList.styles';

type Props = {
  heading: 'Dyrektor' | 'Dyrektorzy' | 'Pracownicy administracji i obsługi' | 'Opekunki';
  isDirector?: boolean;
  staffArray: {
    name: string;
    job?: string;
  }[];
};

export const StaffList = ({ heading, staffArray, isDirector }: Props) => (
  <StyledListWrapper>
    <h3 className={isDirector ? 'big' : ''}>{`${heading}:`}</h3>
    <ul>
      {staffArray.map((employee, index) => (
        <li key={index}>
          {employee.job ? (
            <p>
              {employee.name} - <span className="job">{employee.job}</span>
            </p>
          ) : (
            <p className={isDirector ? 'big' : ''}>{employee.name}</p>
          )}
        </li>
      ))}
    </ul>
  </StyledListWrapper>
);
