import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { GalleryTile } from '../GalleryTile/GalleryTile';
import { StyledSection } from './GalleryGroupsSection.styles';
import beesImage from 'public/images/bees.png';
import owlsImage from 'public/images/owls.png';
import ladybugsImage from 'public/images/ladybugs.png';

export const GalleryGroupsSection = () => {
  const groups = [
    {
      id: 1,
      name: 'Grupa I - Pszczółki',
      altText: 'Ilustracja pszczół',
      imgPath: beesImage.src,
    },
    {
      id: 2,
      name: 'Grupa II - Sowy',
      altText: 'Ilustracja sów',
      imgPath: owlsImage.src,
    },
    {
      id: 3,
      name: 'Grupa III - Biedronki',
      altText: 'Ilustracja biedronek',
      imgPath: ladybugsImage.src,
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
