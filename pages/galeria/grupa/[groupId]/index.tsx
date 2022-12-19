import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GALLERY_FOLDERS_OF_GROUP, GET_GROUPS_IDS } from 'graphql/queries';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../../../graphql/apolloClient';
import { GroupData, GrupiesDatum, PokedexData } from 'types/galleryGroupPage';
import { GalleryGroupPageSection } from 'modules/galeria/GalleryGroupPageSection/GalleryGroupPageSection';

type Props = {
  contactInfo: ContactInfo;
  galleryGroupInfo: GroupData;
};

const GroupGallery = ({ contactInfo, galleryGroupInfo }: Props) => {
  const { nazwa: groupName } = galleryGroupInfo;

  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading={`${groupName} - galeria`} returnHref="/galeria">
        <GalleryGroupPageSection galleryGroupInfo={galleryGroupInfo} />
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

  const groupNumber = parseInt(params.groupId as string);

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const groupFoldersRes = await client.query<PokedexData>({
    query: GET_GALLERY_FOLDERS_OF_GROUP,
    variables: {
      groupNumber,
    },
  });

  const galleryGroupInfo = groupFoldersRes.data.grupies.data[0].attributes;

  return {
    props: {
      contactInfo,
      galleryGroupInfo,
    },
  };
};
