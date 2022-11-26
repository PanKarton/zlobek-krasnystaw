import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { NewsPost } from 'modules/aktualności-post/NewsPost/NewsPost';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';

type Props = {
  contactInfo: ContactInfo;
};

const NewsArticle = ({ contactInfo }: Props) => {
  const article = {
    id: '3',
    title: 'Tajemniczy post o nie wiem czym',
    subTitle: 'Sprawdź, a się przekonasz',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
    ],
    date: {
      day: 'środa',
      dayNum: '12',
      month: 'lipiec',
      year: '2022',
      dateMs: 12345,
    },
  };

  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading={article.title}>
        <NewsPost articleData={article} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default NewsArticle;

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false,
  };
}

export const getStaticProps = async () => {
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
