import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactDataResponse } from 'types/contactData';

type Props = {
  contactInfo: ContactDataResponse;
};

const Recruitment = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Rekrutacja">
      <section></section>
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Recruitment;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const { data: contactInfo } = await client.query({
    query: GET_CONTACT_INFO,
  });

  return {
    props: {
      contactInfo,
    },
  };
};
