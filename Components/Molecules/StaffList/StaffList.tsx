import { StyledListWrapper } from './StaffList.styles';

type Props = {
  heading: string;
  staffArray: {
    name: string;
    job: string;
  }[];
};

export const StaffList = ({ heading, staffArray }: Props) => (
  <StyledListWrapper>
    <h3>{`${heading}:`}</h3>
    <ul>
      {staffArray.map((employee, index) => (
        <li key={index}>
          <p>
            <span className="name">{employee.name}</span> - {employee.job}
          </p>
        </li>
      ))}
    </ul>
  </StyledListWrapper>
);
