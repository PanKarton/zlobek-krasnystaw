import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { NewsPostsProvider } from 'providers/NewsPostsProvider';
import { NewsPosts } from 'types/newsPostsArray';

type Props = {
  contactInfo: ContactInfo;
};

const News = ({ contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <NewsPostsProvider>
        <SecondaryTemplate heading="Nasze nowości">
          <NewsListSection />
        </SecondaryTemplate>
      </NewsPostsProvider>
    </ContactDataProvider>
  );
};

export default News;

export const getServerSideProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
