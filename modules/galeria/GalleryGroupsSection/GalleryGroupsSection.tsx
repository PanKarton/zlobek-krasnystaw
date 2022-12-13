import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledSection } from './GalleryGroupsSection.styles';

export const GalleryGroupsSection = () => {
  const groups = [
    {
      id: 1,
      name: 'Grupa I - Pszczółki',
    },
    {
      id: 2,
      name: 'Grupa II - Sowy',
    },
    {
      id: 3,
      name: 'Grupa III - Biedronki',
    },
  ];

  return (
    <SectionWithStars>
      <StyledSection>
        <ul>
          {groups &&
            groups.map((group) => (
              <li key={group.id}>
                <GalleryTile groupData={group} />
              </li>
            ))}
        </ul>
      </StyledSection>
    </SectionWithStars>
  );
};
