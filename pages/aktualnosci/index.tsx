import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { NewsPostsProvider } from 'providers/NewsPostsProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const News: NextPage<PageProps> = ({ contactInfo }) => {
  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - aktualności</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <NewsPostsProvider>
          <SecondaryTemplate heading="Nasze nowości">
            <NewsListSection />
          </SecondaryTemplate>
        </NewsPostsProvider>
      </ContactDataProvider>
    </>
  );
};

export default News;

export const getStaticProps = async () => {
  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
