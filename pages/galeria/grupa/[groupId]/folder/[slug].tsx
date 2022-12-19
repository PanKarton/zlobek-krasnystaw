import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_GROUPS_SLUGS, GET_IMAGES_FOLDER_OF_GROUP } from 'graphql/queries';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../../../../graphql/apolloClient';
import { Group, GroupsIdsAndFoldersSlugsResponse, ImageFolder } from 'types/galleryGroupsIdsAndFoldersSlugs';
import { GalleryFolderResponse, GalleryGroup } from 'types/galleryFolderResponse';

type Props = {
  contactInfo: ContactInfo;
  groupFolder: GalleryGroup;
};

type Paths = {
  params: {
    groupId: string;
    slug: string;
  };
}[];

const GalleryFolder = ({ contactInfo, groupFolder }: Props) => {
  const {
    attributes: { nazwa: groupName, numerGrupy: groupId },
  } = groupFolder;

  const folderName = groupFolder.attributes.foldery_zdjecs.data[0].attributes.nazwa;

  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading={`${groupName} - ${folderName}`} returnHref={`/galeria/grupa/${groupId}`}>
        <p>asddasd</p>
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default GalleryFolder;

export const getStaticPaths: GetStaticPaths = async () => {
  const newsPostsRes = await client.query<GroupsIdsAndFoldersSlugsResponse>({
    query: GET_GROUPS_SLUGS,
  });

  const paths: Paths = [];

  newsPostsRes.data.grupies.data.forEach((group: Group) => {
    const groupId = group.attributes.numerGrupy.toString();

    group.attributes.foldery_zdjecs.data.forEach((folder: ImageFolder) => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);

  const { slug } = params;
  const groupNumber = parseInt(params.groupId as string);

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const groupFoldersRes = await client.query<GalleryFolderResponse>({
    query: GET_IMAGES_FOLDER_OF_GROUP,
    variables: {
      groupNumber,
      slug,
    },
  });

  const groupFolder = groupFoldersRes.data.grupies.data[0];

  return {
    props: {
      contactInfo,
      groupFolder,
    },
  };
};
