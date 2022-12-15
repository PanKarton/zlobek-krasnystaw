import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GROUPS_IDS } from 'graphql/queries';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../../graphql/apolloClient';
import { GrupiesDatum } from 'types/galleryGroupPage';

type Props = {
  contactInfo: ContactInfo;
  groupId: 1 | 2 | 3;
};

const GroupGallery = ({ contactInfo, groupId }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Nasze zdjęcia">
        <section>{groupId}</section>
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default GroupGallery;

export const getStaticPaths: GetStaticPaths = async () => {
  const newsPostsRes = await client.query({
    query: GET_GROUPS_IDS,
  });

  const paths = newsPostsRes.data.grupies.data.map((group: GrupiesDatum) => {
    return {
      params: {
        groupId: group.attributes.numerGrupy.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);
  const { groupId } = params;

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
      groupId,
    },
  };
};
