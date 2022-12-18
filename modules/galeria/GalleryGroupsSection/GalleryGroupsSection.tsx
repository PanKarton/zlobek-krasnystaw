import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledSection } from './GalleryGroupsSection.styles';

export const GalleryGroupsSection = () => {
  const groups = [
    {
      id: 1,
      name: 'Grupa I - Pszczółki',
      altText: 'Ilustracja pszczół',
      imgPath: '/images/pszczoly.png',
    },
    {
      id: 2,
      name: 'Grupa II - Sowy',
      altText: 'Ilustracja sów',
      imgPath: '/images/sowy.png',
    },
    {
      id: 3,
      name: 'Grupa III - Biedronki',
      altText: 'Ilustracja biedronek',
      imgPath: '/images/biedronki.png',
    },
  ];

  return (
    <SectionWithStars>
      <StyledSection>
        <ul>
          {groups &&
            groups.map((group) => (
              <li key={group.id}>
                <GalleryTile name={group.name} href={`/galeria/grupa/${group.id}`} altText={group.altText} imgPath={group.imgPath} />
              </li>
            ))}
        </ul>
      </StyledSection>
    </SectionWithStars>
  );
};
