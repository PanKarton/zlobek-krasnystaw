import { DownloadFileAnchor } from 'Components/Atoms/DownloadFileAnchor/DownloadFileAnchor';
import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { StyledSection } from './RodoSection.styles';

export const RodoSection = () => (
  <StyledSection>
    <StarsBackground />
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
          <DownloadFileAnchor href="/download/umowa.pdf">umowa.pdf (159kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href="/download/przepis-prawa.pdf">przepis-prawa.pdf(86kb)</DownloadFileAnchor>
        </li>
      </ul>
    </div>
  </StyledSection>
);
