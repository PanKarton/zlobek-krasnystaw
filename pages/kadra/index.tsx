import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const Staff = () => {
  return (
    <SecondaryTemplate heading="Nasza załoga">
      <StaffListPageSection />
    </SecondaryTemplate>
  );
};

export default Staff;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
