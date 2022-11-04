import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { StaffList } from 'Components/Molecules/StaffList/StaffList';
import styled from 'styled-components';
import { useStaffData } from './useStaffData';

const StyledSection = styled.section`
  position: relative;
  margin-top: 2rem;
  padding-block: 1rem 5rem;
  @media screen and (min-width: 900px) {
    margin-top: 3rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .list-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      p.description {
        font-family: var(--font-primary);
        font-size: ${({ theme }) => theme.fontSize.textBase};
        line-height: ${({ theme }) => theme.lineHeight.textBase};
        color: ${({ theme }) => theme.color.text.primary};
        font-weight: 400;
        letter-spacing: 1px;
        max-width: 85ch;
        @media screen and (min-width: 900px) {
          font-size: ${({ theme }) => theme.fontSize.textLG};
        }
      }
    }
  }
`;

export const StaffListPageSection = () => {
  const { babysittesData, serviceWorkersData, directorsData } = useStaffData();

  return (
    <StyledSection>
      <StarsBackground />
      <div></div>
      <div className="flex-wrapper max-width-1440">
        <StaffList isDirector heading="Dyrektorzy" staffArray={directorsData} />
        <div className="list-wrapper">
          <StaffList heading="Pracownicy administracji i obsługi" staffArray={serviceWorkersData} />
          <p className="description">
            Pracownicy obsługi organizują jadłospis, wydawanie posiłków oraz zaopatrzenie w żywność. Ponadto dbają o czystość oraz stan techniczny
            plackówki, jak i jej wyposażenia, a co najważniejsze - o bezpieczeństwo najmłodszych.
          </p>
        </div>
        <div className="list-wrapper">
          <StaffList heading="Opekunki" staffArray={babysittesData} />
          <p className="description">
            Nasza załoga to wspaniałe i empatyczne panie, których cechą wspólną jest kreatywność i świetne podejście do dzieci. Domowa atmosfera,
            zabawa i bezpieczeństwo to priotytety naszych opiekunek.
          </p>
        </div>
      </div>
    </StyledSection>
  );
};
