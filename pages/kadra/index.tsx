import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_STAFF_LISTS } from 'graphql/queries';
import { StaffResponse } from 'types/staff';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

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

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const staffRes = await client.query({
    query: GET_STAFF_LISTS,
  });

  const staff = staffRes.data;

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
