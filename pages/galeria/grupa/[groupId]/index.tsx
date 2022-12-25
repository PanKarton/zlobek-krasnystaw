import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GALLERY_FOLDERS_OF_GROUP, GET_GROUPS_IDS } from 'graphql/queries';
import { GetStaticPropsContext, NextPage } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../../../graphql/apolloClient';
import { GalleryGroupsResponse, GroupsDataAttributes } from 'types/galleryResponse';
import { GalleryGroupPageSection } from 'modules/galeria/GalleryGroupPageSection/GalleryGroupPageSection';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  galleryGroupInfo: GroupsDataAttributes;
};

const GroupGallery: NextPage<PageProps> = ({ contactInfo, galleryGroupInfo }) => {
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

export const getStaticPaths = async () => {
  const newsPostsRes = await client.query<GalleryGroupsResponse>({
    query: GET_GROUPS_IDS,
  });

  const paths = newsPostsRes.data.grupies.data.map((group) => {
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

type Params = {
  groupId: string;
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<Params>) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);

  const groupNumber = parseInt(params.groupId);

  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const groupFoldersRes = await client.query<GalleryGroupsResponse>({
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
