import Link from 'next/link';
import { StyledWrapper } from './GalleryTile.styles';

type Props = {
  name: string;
  href: string;
};

export const GalleryTile = ({ name, href }: Props) => {
  return (
    <Link href={href}>
      <StyledWrapper>
        <div className="img-wrapper"></div>
        <div className="name-wrapper">
          <span>{name}</span>
        </div>
      </StyledWrapper>
    </Link>
  );
};
