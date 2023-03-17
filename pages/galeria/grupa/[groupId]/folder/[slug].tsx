import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GROUPS_SLUGS, GET_IMAGES_FOLDER_OF_GROUP } from 'graphql/queries';
import { GetStaticPropsContext, NextPage } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../../../../graphql/apolloClient';
import { GalleryFolderSection } from 'modules/galeria-folder/GalleryFolderSection/GalleryFolderSection';
import { GalleryGroupsResponse, ImageFoldersDataAttributes } from 'types/galleryResponse';
import { GalleryProvider } from 'providers/GalleryProvider';
import { FallbackLoader } from 'Components/Atoms/FallbackLoader/FallbackLoader';
import { useRouter } from 'next/router';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  groupNumber: string;
  groupName: string;
  imagesFolderAttributes: ImageFoldersDataAttributes;
};

const GalleryFolder: NextPage<PageProps> = ({ contactInfo, groupNumber, groupName, imagesFolderAttributes }) => {
  const router = useRouter();

  if (router.isFallback) return <FallbackLoader />;

  const { nazwaFolderu: folderName, zdjecia: images, publishedAt } = imagesFolderAttributes;

  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - zdjęcia</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <GalleryProvider imagesData={images}>
          <SecondaryTemplate heading={`${groupName} - ${folderName}`}>
            <GalleryFolderSection images={images.data} returnHref={`/galeria/grupa/${groupNumber}`} publishDate={publishedAt} />
          </SecondaryTemplate>
        </GalleryProvider>
      </ContactDataProvider>
    </>
  );
};

export default GalleryFolder;

type Paths = {
  params: {
    groupId: string;
    slug: string;
  };
}[];

export const getStaticPaths = async () => {
  const newsPostsRes = await client.query<GalleryGroupsResponse>({
    query: GET_GROUPS_SLUGS,
  });

  const paths: Paths = [];

  newsPostsRes.data.groups.data.forEach((group) => {
    const groupId = group.attributes.numerGrupy;

    group.attributes.foldery_zdjecs.data.forEach((folder) => {
      paths.push({
        params: {
          groupId,
          slug: folder.attributes.slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: true,
  };
};

type Params = {
  groupId: string;
  slug: string;
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<Params>) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);

  const { slug } = params;
  const groupNumber = params.groupId;

  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    fetchPolicy: 'network-only',
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const groupFoldersRes = await client.query<GalleryGroupsResponse>({
    query: GET_IMAGES_FOLDER_OF_GROUP,
    fetchPolicy: 'network-only',
    variables: {
      groupNumber,
      slug,
    },
  });

  const groupFolder = groupFoldersRes.data.groups.data[0].attributes;
  const groupName = groupFolder.nazwaGrupy;
  const imagesFolderAttributes = groupFolder.foldery_zdjecs.data[0].attributes;

  if (!groupFolder || !contactInfo)
    return {
      notFound: true,
    };

  return {
    props: {
      contactInfo,
      imagesFolderAttributes,
      groupName,
      groupNumber,
    },
    revalidate: 3600,
  };
};
