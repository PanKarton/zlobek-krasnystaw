import { ReturnAnchor } from 'Components/Atoms/ReturnAnchor/ReturnAnchor';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { buildURL } from 'helpers/buildURL';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import { GalleryImage } from 'types/galleryResponse';
import { GalleryModal } from '../GalleryModal/GalleryModal';
import { ImageTile } from '../ImageTile/ImageTile';
import { PublishDate, StyledList } from './GalleryFolderSection.styles';
import { useGallery } from 'providers/GalleryProvider';

type Props = {
  images: GalleryImage[];
  returnHref: string;
  publishDate: Date;
};

export const GalleryFolderSection = ({ images, returnHref, publishDate }: Props) => {
  const formatedDate = formatDate(publishDate);
  const dayName = getDayName(publishDate);
  const { handleOpenModal } = useGallery();

  return (
    <SectionWithStars hasNoMarginTop>
      <PublishDate>
        <p className="publish-date">{`${dayName}, ${formatedDate}`}</p>
        <ReturnAnchor href={returnHref} />
      </PublishDate>
      <StyledList>
        {images &&
          images.map((image, index) => (
            <li key={index}>
              <ImageTile
                onClick={() => handleOpenModal(index)}
                imgPath={buildURL(image.attributes.url)}
                altText={image.attributes.alternativeText || `Zdjęcie ${index} z ${images.length}`}
              />
            </li>
          ))}
      </StyledList>
      <GalleryModal />
    </SectionWithStars>
  );
};
