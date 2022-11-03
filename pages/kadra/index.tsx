import { StaffListPageSection } from 'Components/Organisms/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const Staff = () => {
  return (
    <SecondaryTemplate heading="Nasza załoga">
      <StaffListPageSection />
    </SecondaryTemplate>
  );
};

export default Staff;
