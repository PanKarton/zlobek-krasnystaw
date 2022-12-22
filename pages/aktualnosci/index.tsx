import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { NewsPostsProvider } from 'providers/NewsPostsProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  contactInfo: ContactInfoDataAttributes;
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

export const getStaticProps: GetStaticProps = async () => {
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
