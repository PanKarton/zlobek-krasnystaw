import DownloadFileAnchor from 'Components/Atoms/DownloadFileAnchor/DownloadFileAnchor';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-block: 2rem 5rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  .flex-wrapper {
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.text4XL};
      max-width: 65ch;
      @media screen and (min-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      line-height: ${({ theme }) => theme.lineHeight.text4XL};
      font-weight: 500;
      margin-top: 3rem;
      @media screen and (min-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;

const Rodo = () => (
  <SecondaryTemplate heading="Ochrona danych osobowych">
    <StyledSection>
      <div className="flex-wrapper max-width-1440">
        <p>
          Na podstawie art. 37 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
          osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          ogólne rozporządzenie o ochronie danych, w zw. z art. 11 Ustawy z dnia 10 maja 2018 o ochronie danych osobowych Dyrektor Żłobka Miejskiego w
          Krasnymstawie wyznaczył <strong>Inspektora Ochrony Danych Panią Aleksandrę Jarocką</strong>, z którą mogą się Państwo kontaktować we
          wszystkich sprawach dotyczących przetwarzania danych osobowych, za pośrednictwem adresu email: inspektor@cbi24.pl lub pisemnie na adres
          Administratora.
        </p>
        <h3>Obowiązki informacyjne w formie plików do pobrania:</h3>
        <ul>
          <li>
            <DownloadFileAnchor href="/download/odbiór-dziecka.pdf">odbiór-dziecka.pdf (134kb)</DownloadFileAnchor>
          </li>
          <li>
            <DownloadFileAnchor href="/download/umowa-z-kontrahentem.pdf">umowa-z-kontrahentem.pdf (159kb)</DownloadFileAnchor>
          </li>
          <li>
            <DownloadFileAnchor href="/download/przepisy-prawne.pdf">przepisy-prawne.pdf(86kb)</DownloadFileAnchor>
          </li>
        </ul>
      </div>
    </StyledSection>
  </SecondaryTemplate>
);

export default Rodo;
