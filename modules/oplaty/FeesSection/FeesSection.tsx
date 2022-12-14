import { CopyToClipBoardWrapper } from 'modules/oplaty/CopyToClipBoardWrapper/CopyToClipBoardWrapper';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { BankAccountData, StyledWrapper } from './FeesSection.styles';
import { FeesDataAttributes } from 'types/feesResponse';

type Props = {
  feesData: FeesDataAttributes;
};

export const FeesSection = ({ feesData }: Props) => {
  const { kwotaMiesieczna: monthlyFee, wyzywienie: dailyFoodFee, nazwaBanku: bankName, numerKonta: accountNumber } = feesData;

  return (
    <SectionWithStars>
      <StyledWrapper>
        <h3>Opłaty związane z pobytem dziecka w żłobku obejmują:</h3>
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
            </li>
            <li>
              <p>
                <strong>{dailyFoodFee}zł/1 dzień*</strong> - wyżywienie
              </p>
            </li>
          </ul>
          <p>* W przypadku nieobecności dziecka opłata za wyżywienie podlega odliczeniu.</p>
        </div>
        <BankAccountData>
          <p className="transfer-pattern">
            Tytuł przelewu uprzejmie prosimy napisać wg podanego wzoru: <br />
            <strong>Imię i nazwisko dziecka, grupa</strong>
          </p>
          <p className="bank-name">
            Bank: <strong>{bankName}</strong>
          </p>
          <div>
            <p className="account-number-label">Numer konta:</p>
            <CopyToClipBoardWrapper accountNumber={accountNumber} text={accountNumber} />
          </div>
          <p className="deadline-info">Płatności prosimy uiszczać najpóźniej do 25 dnia danego miesiąca.</p>
        </BankAccountData>
      </StyledWrapper>
    </SectionWithStars>
  );
};
