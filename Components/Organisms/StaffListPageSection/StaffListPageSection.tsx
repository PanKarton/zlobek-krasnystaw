import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StaffList } from 'Components/Molecules/StaffList/StaffList';
import { StyledWrapper } from './StaffListPageSection.styles';
import { useStaffData } from './useStaffData';

export const StaffListPageSection = () => {
  const { babysittesData, serviceWorkersData, directorsData } = useStaffData();

  return (
    <SectionWithStars>
      <StyledWrapper>
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
      </StyledWrapper>
    </SectionWithStars>
  );
};
