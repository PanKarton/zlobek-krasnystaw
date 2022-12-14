import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GROUPS_SLUGS, GET_IMAGES_FOLDER_OF_GROUP } from 'graphql/queries';
import { GetStaticPropsContext, NextPage } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../../../../graphql/apolloClient';
import { GalleryFolderSection } from 'modules/galeria-folder/GalleryFolderSection/GalleryFolderSection';
import { GalleryGroupsResponse, GalleryImage, ImageFoldersDataAttributes } from 'types/galleryResponse';
import { GalleryProvider } from 'providers/GalleryProvider';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  folderName: string;
  imagesArray: GalleryImage[];
  groupNumber: string;
  groupName: string;
  imagesFolderAttributes: ImageFoldersDataAttributes;
};

const GalleryFolder: NextPage<PageProps> = ({ contactInfo, groupNumber, groupName, imagesFolderAttributes }) => {
  const { nazwaFolderu: folderName, zdjecia: images, publishedAt } = imagesFolderAttributes;

  return (
    <ContactDataProvider contactData={contactInfo}>
      <GalleryProvider imagesData={images}>
        <SecondaryTemplate heading={`${groupName} - ${folderName}`}>
          <GalleryFolderSection images={images.data} returnHref={`/galeria/grupa/${groupNumber}`} publishDate={publishedAt} />
        </SecondaryTemplate>
      </GalleryProvider>
    </ContactDataProvider>
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

    group.attributes.foldery_zdjec.data.forEach((folder) => {
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
    fallback: false,
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
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const groupFoldersRes = await client.query<GalleryGroupsResponse>({
    query: GET_IMAGES_FOLDER_OF_GROUP,
    variables: {
      groupNumber,
      slug,
    },
  });

  const groupFolder = groupFoldersRes.data.groups.data[0].attributes;
  const groupName = groupFolder.nazwaGrupy;
  const imagesFolderAttributes = groupFolder.foldery_zdjec.data[0].attributes;

  return {
    props: {
      contactInfo,
      imagesFolderAttributes,
      groupName,
      groupNumber,
    },
  };
};
