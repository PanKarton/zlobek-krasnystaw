import { RodoSection } from 'modules/rodo/RodoSection/RodoSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

type Props = {
  contactInfo: ContactInfo;
};

const Contact = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Ochrona danych osobowych">
      <RodoSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Contact;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const ContactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
