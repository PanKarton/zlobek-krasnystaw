import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_STAFF_LISTS } from 'graphql/queries';
import { StaffResponse } from 'types/staff';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

type Props = {
  staff: StaffResponse;
  contactInfo: ContactDataResponse;
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

  const { data } = await client.query({
    query: GET_STAFF_LISTS,
  });

  const { data: contactInfo } = await client.query({
    query: GET_CONTACT_INFO,
  });

  return {
    props: {
      staff: data.staff,
      contactInfo,
    },
  };
};
