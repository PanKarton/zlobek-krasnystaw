import styled from 'styled-components';

export const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  line-height: ${({ theme }) => theme.lineHeight.text2XL};

  .a11y-wstep {
  }
`;

export const AccessibilityDeclarationSection = () => {
  return (
    <StyledSection>
      <div className="max-width-1440">
        <div id="a11y-wstep">
          <span id="a11y-podmiot">Żłobek Miejski w Krasnymstawie</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z
          ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w
          sprawie dostępności ma zastosowanie do{' '}
          <a href="https://zlobek-krasnystaw.pl/" id="a11y-url">
            strony internetowej Żłobka Miejskiego w Krasnymstawie
          </a>
          .
        </div>
        <p>
          Data publikacji strony internetowej: <span id="a11y-data-publikacja">2023-03</span>. Data ostatniej istotnej aktualizacji:{' '}
          <span id="a11y-data-aktualizacja">strona nie była aktualizowana</span>.
        </p>
        <div id="a11y-status">
          Strona internetowa jest częściowo zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych
          podmiotów publicznych z powodu niezgodności lub wyłączeń wymienionych poniżej:
          <ul>
            <li>Przy zwiększeniu odstępów w tekście pomiędzy wierszami następuje utrata treści,</li>
            <li>Treści spod kursora nie spełniają trzech głównych wymagań,</li>
            <li>Na stronie internetowej nie zawarto celu linków w kontekście,</li>
            <li>Na stronie brak możliwości zlokalizowania podstron na wiele sposobów,</li>
            <li>Język strony internetowej jest inny niż główny język strony określony programowo.</li>
          </ul>
          Wyłączenia:
          <ul>
            <li>mapy są wyłączone z obowiązku zapewniania dostępności.</li>
          </ul>
        </div>
        <p>
          Oświadczenie sporządzono dnia: <span id="a11y-data-sporzadzenie">2023-03-0028</span>.
        </p>
        <p>
          Deklarację sporządzono na podstawie badania przeprowadzonego przez podmiot zewnętrzny:{' '}
          <span id="a11y-audytor"> Centrum Bezpieczeństwa Informatycznego</span>.
        </p>
        <h2> Skróty klawiaturowe</h2>
        <p> Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki. </p>
        <h2 id="a11y-kontakt">Informacje zwrotne i dane kontaktowe</h2>
        <p>
          W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest
          <span id="a11y-osoba">Justyna Piotrowska</span>, <span id="a11y-email">zlobek.krasnystaw@gmail.com</span>. Kontaktować można się także
          dzwoniąc na numer telefonu <span id="a11y-telefon">82 576 31 82</span>. Tą samą drogą można składać wnioski o udostępnienie informacji
          niedostępnej oraz składać żądania zapewnienia dostępności.
        </p>
        <p id="a11y-procedura">
          {' '}
          Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu.
          Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo
          dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą
          stronę internetową lub aplikację mobilną chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą
          alternatywnego sposobu dostępu,, powinna także określić dogodny dla niej sposób przedstawienia tej informacji. Podmiot publiczny powinien
          zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest
          możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten
          nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem. Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot
          publiczny może zaproponować alternatywny sposób dostępu do informacji. W przypadku, gdy podmiot publiczny odmówi realizacji żądania
          zapewnienia dostępności lub alternatywnego sposobu dostępu do informacji, wnoszący żądanie możne złożyć skargę w sprawie zapewniana
          dostępności cyfrowej strony internetowej, aplikacji mobilnej lub elementu strony internetowej, lub aplikacji mobilnej. Po wyczerpaniu
          wskazanej wyżej procedury można także złożyć wniosek do Rzecznika Praw Obywatelskich.
        </p>
        <p>
          Link do strony internetowej <a href="https://www.rpo.gov.pl/">Rzecznika Praw Obywatelskich</a>.
        </p>
        <h2 id="a11y-atchitektura">Dostępność architektoniczna</h2>
        <p>Żłobek Miejski, Poniatowskiego 48, 22-300 Krasnystaw</p>
        <ol>
          <li>W budynku znajdują się 2 wejścia. Jest podjazd dla wózków.</li>
          <li>Brak windy. Schody i korytarze spełniają normy szerokości. Schody mają spocznik.</li>
          <li>Są pochylnie. Brak platform, informacji głosowych, pętli indukcyjnych.</li>
          <li>Brak miejsc parkingowych wyznaczonych dla osób niepełnosprawnych.</li>
          <li>Prawo wstępu z psem asystującym nie zostało uregulowane.</li>
          <li>Brak możliwości skorzystania z tłumacza języka migowego na miejscu lub online.</li>
          <li>Brak toalet przystosowanych dla osób niepełnosprawnych.</li>
          <li>Jest możliwość wyjścia do osoby z niepełnosprawnościami.</li>
        </ol>
        <h2 id="a11y-aplikacje">Aplikacje mobilne</h2>
        <p>Brak aplikacji mobilnych.</p>{' '}
      </div>
    </StyledSection>
  );
};
