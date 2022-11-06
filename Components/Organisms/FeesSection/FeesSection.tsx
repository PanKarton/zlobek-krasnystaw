import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import styled from 'styled-components';
import { useFees } from './useFees';

const StyledSection = styled.section``;

const BankAccountData = styled.div``;

export const FeesSection = () => {
  const { monthlyFee, dailyFoodFee, accountNumber, bankName } = useFees();

  return (
    <StyledSection>
      <StarsBackground />
      <div className="max-width-1440">
        <h3>Opłaty zwiazane z pobytem dziecka w żłobku obejmują:</h3>
        <div className="fees-wrapper">
          <ul>
            <li>
              <p>
                <strong>0zł</strong> - wpisowe
              </p>
            </li>
            <li>
              <p>
                <strong>{monthlyFee}zł</strong> - czesne za jeden miesiąc
              </p>
              <li></li>
              <p>
                <strong>{dailyFoodFee}zł/1 dzień*</strong> - wyżywienie
              </p>
            </li>
          </ul>
          <p>* W przypadku nieobecności dziecka opłata za wyżywienie podlega odliczeniu.</p>
        </div>
        <BankAccountData>
          <p>Tytuł przelewu prosimy uprzejmie napisać wg. podanego wzoru:</p>
          <p>
            <strong>Imię i nazwisko dziecka, grupa</strong>
          </p>
          <p>
            Bank: <strong>{bankName}</strong>
          </p>
          <p>Numer konta:</p>
          <p>Płatności prosimy uiszczać najpóźniej do 25 dnia danego miesiąca.</p>
        </BankAccountData>
      </div>
    </StyledSection>
  );
};
