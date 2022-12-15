import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledSection } from './GalleryGroupPageSection.styles';
import { GroupData } from 'types/galleryGroupPage';

type Props = {
  galleryGroupInfo: GroupData;
};

export const GalleryGroupPageSection = ({ galleryGroupInfo }: Props) => {
  // Rename polish names to english
  const { numerGrupy: groupId, foldery_zdjecs: groupGalleryFolders } = galleryGroupInfo;

  const folders = groupGalleryFolders.data;

  return (
    <SectionWithStars>
      <StyledSection>
        <ul>
          {folders &&
            folders.map((folder) => (
              <li key={folder.id}>
                <GalleryTile name={folder.attributes.nazwa} href={`/galeria/grupa/${groupId}/${folder.attributes.slug}`} />
              </li>
            ))}
        </ul>
      </StyledSection>
    </SectionWithStars>
  );
};
