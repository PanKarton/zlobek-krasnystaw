import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { StaffList } from 'Components/Molecules/StaffList/StaffList';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  padding-block: 2rem 5rem;
`;

const Staff = () => {
  const teachers = [
    {
      name: 'mgr Anna Kowalska',
      job: 'nauczyciel dyplomowany',
    },
    {
      name: 'mgr Natalia Biela',
      job: 'nauczyciel dyplomowany',
    },
    {
      name: 'mgr Justyna Bielińska',
      job: 'nauczyciel dyplomowany',
    },
    {
      name: 'mgr Justyna Gątarska',
      job: 'nauczyciel dyplomowany',
    },
  ];

  return (
    <SecondaryTemplate heading="Nasza załoga">
      <StyledSection>
        <StarsBackground />
        <div className="max-width-1440">
          <StaffList heading="Nauczyciele" staffArray={teachers} />
        </div>
      </StyledSection>
    </SecondaryTemplate>
  );
};

export default Staff;
