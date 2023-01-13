import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledWrapper } from './GalleryGroupPageSection.styles';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import { buildURL } from 'helpers/buildURL';
import { GroupsDataAttributes } from 'types/galleryResponse';

type Props = {
  galleryGroupInfo: GroupsDataAttributes;
};

export const GalleryGroupPageSection = ({ galleryGroupInfo }: Props) => {
  // Rename polish names to english
  const { numerGrupy: groupId, foldery_zdjec: groupGalleryFolders } = galleryGroupInfo;

  const folders = groupGalleryFolders.data;

  return (
    <SectionWithStars hasNoMarginTop>
      <StyledWrapper>
        {folders.length ? (
          <ul>
            {folders.map(({ id, attributes: { publishedAt, slug, nazwaFolderu: name, miniaturaFolderu: miniatureImage } }, index) => {
              const publishDate = `${getDayName(publishedAt)}, ${formatDate(publishedAt)}`;

              return (
                <li key={id}>
                  <GalleryTile
                    href={`/galeria/grupa/${groupId}/folder/${slug}`}
                    altText={miniatureImage.data.attributes.alternativeText || `Miniatura ${index} folderu z ${folders.length}`}
                    name={name}
                    imgPath={buildURL(miniatureImage.data.attributes.url)}
                    publishDate={publishDate}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="no-folders-message">Brak folderów zdjęć. Zapraszamy za jakiś czas! :)</p>
        )}
      </StyledWrapper>
    </SectionWithStars>
  );
};
