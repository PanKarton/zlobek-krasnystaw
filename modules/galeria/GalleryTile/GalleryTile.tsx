import Link from 'next/link';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  aspect-ratio: 1.7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  .img-wrapper {
    background-color: #aaa;
    height: 100%;
  }
  .name-wrapper {
    flex-basis: 4.25rem;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-family: var(--font-primary);
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }
  }
`;

type Props = {
  groupData: {
    id: number;
    name: string;
    groupIndex: number;
  };
};

export const GalleryTle = ({ groupData }: Props) => {
  const { name, groupIndex } = groupData;

  return (
    <Link href={`/galeria/${groupIndex}`}>
      <StyledWrapper>
        <div className="img-wrapper"></div>
        <div className="name-wrapper">
          <span>{name}</span>
        </div>
      </StyledWrapper>
    </Link>
  );
};
