import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import styled from 'styled-components';
import { GalleryTle } from '../GalleryTile/GalleryTile';

export const StyledSection = styled.section`
  padding-bottom: 5rem;
  @media screen and (min-width: 56.25rem) {
    padding-bottom: 6rem;
  }
  @media screen and (min-width: 71.875rem) {
    padding-bottom: 7rem;
  }
  @media screen and (min-width: 96.875rem) {
    padding-top: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    gap: 2rem;
    li {
      flex-basis: 100%;
    }

    @media screen and (min-width: 56.25rem) {
      justify-content: center;
      li {
        flex-basis: min(100%, 22.5rem);
      }
    }
    @media screen and (min-width: 71.875rem) {
      column-gap: 3rem;
      row-gap: 2rem;
      li {
        flex-basis: min(100%, 27rem);
      }
    }
    @media screen and (min-width: 96.875rem) {
      li {
        flex-basis: calc(33% - 1.75rem);
      }
    }
  }
`;

export const GalleryGroupsSection = () => {
  const groups = [
    {
      id: 1,
      groupIndex: 1,
      name: 'Grupa I - Pszczółki',
    },
    {
      id: 2,
      groupIndex: 2,
      name: 'Grupa II - Sowy',
    },
    {
      id: 3,
      groupIndex: 3,
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
                <GalleryTle groupData={group} />
              </li>
            ))}
        </ul>
      </StyledSection>
    </SectionWithStars>
  );
};
