import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ContactDataResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { GET_CONTACT_INFO } from 'graphql/queries';

type Props = {
  contactInfo: ContactDataResponse;
};

const News = ({ contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Nasze nowości">
        <NewsListSection />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default News;

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
