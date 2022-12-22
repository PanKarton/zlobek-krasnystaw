import { ReturnAnchor } from 'Components/Atoms/ReturnAnchor/ReturnAnchor';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { buildURL } from 'helpers/buildURL';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import { GalleryImage } from 'types/galleryResponse';
import { ImageTile } from '../ImageTile/ImageTile';
import { PublishDate, StyledList } from './GalleryFolderSection.styles';

type Props = {
  images: GalleryImage[];
  returnHref: string;
  publishDate: Date;
};

export const GalleryFolderSection = ({ images, returnHref, publishDate }: Props) => {
  const formatedDate = formatDate(publishDate);
  const dayName = getDayName(publishDate);

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
              <ImageTile imgPath={buildURL(image.attributes.url)} altText={image.attributes.alternativeText} />
            </li>
          ))}
      </StyledList>
    </SectionWithStars>
  );
};
