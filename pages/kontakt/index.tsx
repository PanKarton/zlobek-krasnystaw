import { ContactSection } from 'modules/kontakt/ContactSection/ContactSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

type Props = {
  contactInfo: ContactDataResponse;
};

const Contact = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Skontaktuj się z nami">
      <ContactSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Contact;
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
