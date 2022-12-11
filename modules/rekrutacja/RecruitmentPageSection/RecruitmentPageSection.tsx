import { DownloadFileAnchor } from 'Components/Atoms/DownloadFileAnchor/DownloadFileAnchor';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.contrast};
  padding-bottom: 3rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    font-weight: 500;
    @media screen and (min-width: 1150px) {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
    }
    &.steps-header {
      margin-bottom: 1.5rem;
      @media screen and (min-width: 1150px) {
        margin-bottom: 2rem;
      }
    }
  }
  ul.download-files-list {
    li {
      margin-top: 0.75rem;
    }
  }
`;

export const StyledStepsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  max-width: 70rem;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1rem;
    li {
      flex-basis: calc(50% - 0.5rem);
    }
  }
  li {
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    @media screen and (min-width: 1150px) {
      gap: 1.5rem;
    }
    .icon-wrapper {
      position: relative;
      width: 3.5rem;
      aspect-ratio: 1;
      @media screen and (min-width: 1150px) {
        width: 4rem;
      }
    }
    .text-wrapper {
      flex-basis: calc(100% - 5rem);
    }
  }
  h4,
  a {
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textLG};
    font-weight: 600;
    margin-top: 3rem;
    @media screen and (min-width: 1150px) {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }
  h4 {
    margin-block: 0;
  }
  a {
    cursor: pointer;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.textBase};
    line-height: ${({ theme }) => theme.lineHeight.textBase};
    font-weight: 400;
    margin-top: 0.25rem;
    @media screen and (min-width: 1150px) {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }
  }
`;

export const RecruitmentPageSection = () => (
  <SectionWithStars>
    <StyledWrapper>
      <h3 className="steps-header">Rekrutacja - krok po kroku</h3>
      <StyledStepsList>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step1.svg" alt="Ikona rodziców z dzieckiem" layout="fill" />
          </div>
          <div className="text-wrapper">
            <h4>Podejmij decyzję wraz z rodziną</h4>
            <p>czy nasz żłobek jest najlepszym miejscem dla Twojego dziecka.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step2.svg" alt="Ikona formularza" layout="fill" />
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
            <Image src="/images/recruitment-step3.svg" alt="Ikona budydnku z tęczą" layout="fill" />
          </div>
          <div className="text-wrapper">
            <h4>Złóż formularz do placówki</h4>
            <p>w dogodnym dla Ciebie terminie i pytaj śmiało o szczegóły oferty.</p>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Image src="/images/recruitment-step4.svg" alt="Ikona zaciśniętych w zgodzie dłoni" layout="fill" />
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
          <DownloadFileAnchor href="/download/deklaracja-o-kontynuowaniu-opieki.pdf">deklaracja-o-kontynuowaniu-opieki.pdf(110kb)</DownloadFileAnchor>
        </li>
        <li>
          <DownloadFileAnchor href="/download/regulamin-rekrutacji.pdf">regulamin-rekrutacji.pdf(216kb)</DownloadFileAnchor>
        </li>
      </ul>
    </StyledWrapper>
  </SectionWithStars>
);
