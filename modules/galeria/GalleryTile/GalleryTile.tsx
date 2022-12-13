import Link from 'next/link';
import { StyledWrapper } from './GalleryTile.styles';

type Props = {
  groupData: {
    id: number;
    name: string;
  };
};

export const GalleryTile = ({ groupData }: Props) => {
  const { name, id } = groupData;

  return (
    <Link href={`/galeria/${id}`}>
      <StyledWrapper>
        <div className="img-wrapper"></div>
        <div className="name-wrapper">
          <span>{name}</span>
        </div>
      </StyledWrapper>
    </Link>
  );
};
