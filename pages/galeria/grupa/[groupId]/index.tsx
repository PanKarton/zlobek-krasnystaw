import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GALLERY_FOLDERS_OF_GROUP, GET_GROUPS_IDS } from 'graphql/queries';
import { GetStaticPropsContext, NextPage } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../../../graphql/apolloClient';
import { GalleryGroupsResponse, GroupsDataAttributes } from 'types/galleryResponse';
import { GalleryGroupPageSection } from 'modules/galeria/GalleryGroupPageSection/GalleryGroupPageSection';
import { FallbackLoader } from 'Components/Atoms/FallbackLoader/FallbackLoader';
import { useRouter } from 'next/router';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  galleryGroupInfo: GroupsDataAttributes;
  groupName: string;
};

const GroupGallery: NextPage<PageProps> = ({ contactInfo, galleryGroupInfo, groupName }) => {
  const router = useRouter();

  if (router.isFallback) return <FallbackLoader />;

  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - foldery zdjęć</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <SecondaryTemplate heading={`${groupName} - galeria`} returnHref="/galeria">
          <GalleryGroupPageSection galleryGroupInfo={galleryGroupInfo} />
        </SecondaryTemplate>
      </ContactDataProvider>
    </>
  );
};

export default GroupGallery;

export const getStaticPaths = async () => {
  const newsPostsRes = await client.query<GalleryGroupsResponse>({
    query: GET_GROUPS_IDS,
  });

  const paths = newsPostsRes.data.groups.data.map((group) => {
    return {
      params: {
        groupId: group.attributes.numerGrupy,
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

  const groupNumber = params.groupId;

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

  const galleryGroupInfo = groupFoldersRes.data.groups.data[0].attributes;
  const groupName = galleryGroupInfo.nazwaGrupy;

  return {
    props: {
      contactInfo,
      galleryGroupInfo,
      groupName,
    },
  };
};
