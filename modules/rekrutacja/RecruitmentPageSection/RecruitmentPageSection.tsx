import { DownloadFileAnchor } from 'Components/Atoms/DownloadFileAnchor/DownloadFileAnchor';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { StyledStepsList, StyledWrapper } from './RecruitmentPageSection.styles';
import recruitmentStepOne from 'public/images/recruitment-step1.png';
import recruitmentStepTwo from 'public/images/recruitment-step2.png';
import recruitmentStepThree from 'public/images/recruitment-step3.png';
import recruitmentStepFour from 'public/images/recruitment-step4.png';
import { buildDownloadPdfURL } from 'helpers/buildDownloadPdfURL';

export const RecruitmentPageSection = () => (
  <SectionWithStars>
    <StyledWrapper>
      <h3 className="steps-header">Rekrutacja - krok po kroku</h3>
      <StyledStepsList>
        <li>
          <div className="icon-wrapper">
            <Image src={recruitmentStepOne} alt="Ikona rodziców z dzieckiem" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Podejmij decyzję wraz z rodziną</h4>
            <p>czy nasz żłobek jest najlepszym miejscem dla Twojego dziecka.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src={recruitmentStepTwo} alt="Ikona formularza" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>
              Pobierz i wypelnij{' '}
              <a href={buildDownloadPdfURL('karta-zgłoszenia.pdf')} download>
                kartę zgłoszenia
              </a>
            </h4>
            <p>Upewnij się, że dane są poprawne oraz upoważnij bliskich do odbioru Twojego dziecka.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src={recruitmentStepThree} alt="Ikona budydnku z tęczą" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Złóż formularz do placówki</h4>
            <p>w dogodnym dla Ciebie terminie* i pytaj śmiało o szczegóły oferty.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src={recruitmentStepFour} alt="Ikona zaciśniętych w zgodzie dłoni" fill sizes="70px" />
          </div>
          <div className="text-wrapper">
            <h4>Podpisz umowę i gotowe.</h4>
            <p>Możemy zaczynać!</p>
          </div>
        </li>
      </StyledStepsList>
      <p className="date-adnonation">* Maksymalnie do 30 kwietnia</p>

      <h3>Dokumenty do pobrania:</h3>

      <ul className="download-files-list">
        <li>
          <DownloadFileAnchor href={buildDownloadPdfURL('karta-zgłoszenia.pdf')}>karta-zgłoszenia.pdf (332kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href={buildDownloadPdfURL('zasady-rekrutacji.pdf')}>zasady-rekrutacji.pdf (193kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href={buildDownloadPdfURL('deklaracja-o-kontynuowaniu-opieki.pdf')}>
            deklaracja-o-kontynuowaniu-opieki.pdf (110kb)
          </DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href={buildDownloadPdfURL('regulamin-rekrutacji.pdf')}>regulamin-rekrutacji.pdf (216kb)</DownloadFileAnchor>
        </li>
      </ul>
    </StyledWrapper>
  </SectionWithStars>
);
