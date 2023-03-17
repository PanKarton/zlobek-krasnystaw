import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StaffList } from 'modules/kadra/StaffList/StaffList';
import { StaffDataAttributes } from 'types/staffResponse';
import { StyledWrapper } from './StaffListPageSection.styles';

type Props = {
  staffData: StaffDataAttributes;
  headmasterName: string;
};

export const StaffListPageSection = ({ staffData, headmasterName }: Props) => {
  const { pracownicyAdministracjiOrazObslugi: serviceWorkers, opiekunki: babysitters } = staffData;

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StaffList isDirector heading={'Dyrektor'} headmasterName={headmasterName} />
        <div className="list-wrapper">
          <StaffList heading="Pracownicy administracji i obsługi" staffArray={serviceWorkers} />
          <p className="description">
            Pracownicy obsługi organizują jadłospis, wydawanie posiłków oraz zaopatrzenie w żywność. Ponadto dbają o czystość oraz stan techniczny
            plackówki, jak i jej wyposażenia, a co najważniejsze - o bezpieczeństwo najmłodszych.
          </p>
        </div>
        <div className="list-wrapper">
          <StaffList heading="Opekunki" staffArray={babysitters} />
          <p className="description">
            Nasza załoga to wspaniałe i empatyczne panie, których cechą wspólną jest kreatywność i świetne podejście do dzieci. Domowa atmosfera,
            zabawa i bezpieczeństwo to priotytety naszych opiekunek.
          </p>
        </div>
      </StyledWrapper>
    </SectionWithStars>
  );
};
