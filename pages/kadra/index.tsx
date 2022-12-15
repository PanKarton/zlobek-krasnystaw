import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_STAFF_LISTS } from 'graphql/queries';
import { StaffResponse } from 'types/staff';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  staff: StaffResponse;
  contactInfo: ContactInfo;
};

const Staff = ({ staff, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Nasza załoga">
        <StaffListPageSection staffData={staff} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Staff;

export const getStaticProps: GetStaticProps = async () => {
  const staffRes = await client.query({
    query: GET_STAFF_LISTS,
  });

  const staff = staffRes.data.staff.data.attributes;

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      staff,
      contactInfo,
    },
  };
};
