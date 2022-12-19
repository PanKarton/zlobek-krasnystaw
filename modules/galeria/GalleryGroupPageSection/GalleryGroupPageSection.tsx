import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledSection } from './GalleryGroupPageSection.styles';
import { GroupData } from 'types/galleryGroupPage';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import { buildURL } from 'helpers/buildURL';

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
        {folders.length ? (
          <ul>
            {folders.map(({ id, attributes: { publishedAt, slug, nazwa: name, miniatura: miniatureImage } }) => {
              const publishDate = `${getDayName(publishedAt)}, ${formatDate(publishedAt)}`;

              return (
                <li key={id}>
                  <GalleryTile
                    href={`/galeria/grupa/${groupId}/folder/${slug}`}
                    altText={miniatureImage.data.attributes.alternativeText}
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
      </StyledSection>
    </SectionWithStars>
  );
};
