import Image from 'next/image';
import Link from 'next/link';
import { StyledWrapper } from './GalleryTile.styles';

type Props = {
  name: string;
  href: string;
  altText: string;
  imgPath: string;
  publishDate?: string;
};

export const GalleryTile = ({ name, href, altText, imgPath, publishDate }: Props) => {
  return (
    <Link href={href}>
      <StyledWrapper>
        <div className="img-wrapper">
          <Image src={imgPath} alt={altText} layout="fill" objectFit="cover" />
        </div>
        <div className="name-wrapper">
          <span>{name}</span>
        </div>
        {publishDate ? (
          <div className="date-wrapper">
            <span>{publishDate}</span>
          </div>
        ) : null}
      </StyledWrapper>
    </Link>
  );
};
