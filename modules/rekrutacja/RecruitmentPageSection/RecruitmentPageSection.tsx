import { DownloadFileAnchor } from 'Components/Atoms/DownloadFileAnchor/DownloadFileAnchor';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { StyledStepsList, StyledWrapper } from './RecruitmentPageSection.styles';

export const RecruitmentPageSection = () => (
  <SectionWithStars>
    <StyledWrapper>
      <h3 className="steps-header">Rekrutacja - krok po kroku</h3>
      <StyledStepsList>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step1.svg" alt="Ikona rodziców z dzieckiem" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Podejmij decyzję wraz z rodziną</h4>
            <p>czy nasz żłobek jest najlepszym miejscem dla Twojego dziecka.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step2.svg" alt="Ikona formularza" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>
              Pobierz i wypelnij{' '}
              <a href="/download/karta-zgłoszenia.pdf" download>
                kartę zgłoszenia
              </a>
            </h4>
            <p>Upewnij się, że dane są poprawne oraz upoważnij bliskich do odbioru Twojego dziecka.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step3.svg" alt="Ikona budydnku z tęczą" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Złóż formularz do placówki</h4>
            <p>w dogodnym dla Ciebie terminie i pytaj śmiało o szczegóły oferty.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step4.svg" alt="Ikona zaciśniętych w zgodzie dłoni" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Podpisz umowę i gotowe.</h4>
            <p>Możemy zaczynać!</p>
          </div>
        </li>
      </StyledStepsList>
      <h3>Dokumenty do pobrania:</h3>

      <ul className="download-files-list">
        <li>
          <DownloadFileAnchor href="/download/karta-zgłoszenia.pdf">karta-zgłoszenia.pdf (332kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href="/download/zasady-rekrutacji.pdf">zasady-rekrutacji.pdf (193kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href="/download/deklaracja-o-kontynuowaniu-opieki.pdf">
            deklaracja-o-kontynuowaniu-opieki.pdf (110kb)
          </DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href="/download/regulamin-rekrutacji.pdf">regulamin-rekrutacji.pdf (216kb)</DownloadFileAnchor>
        </li>
      </ul>
    </StyledWrapper>
  </SectionWithStars>
);
