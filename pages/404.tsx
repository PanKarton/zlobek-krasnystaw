import { ErrorPageSection } from 'modules/404/ErrorPageSection/ErrorPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactDataResponse } from 'types/contactData';

type Props = {
  contactInfo: ContactDataResponse;
};

const ErrorPage = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate>
      <ErrorPageSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default ErrorPage;

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
