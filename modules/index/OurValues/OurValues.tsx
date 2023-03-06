import { ValueCell } from 'modules/index/ValueCell/ValueCell';
import Image from 'next/image';
import { StyledSection } from './OurVaues.styles';
import ourValueImageOne from 'public/images/our-value1.svg';
import ourValueImageTwo from 'public/images/our-value2.svg';
import ourValueImageThree from 'public/images/our-value3.svg';

export const OurValues = () => (
  <StyledSection>
    <div className="max-width-1440">
      <ul>
        <li>
          <ValueCell>
            <div>
              <Image src={ourValueImageOne} alt="dłoń z sercem" fill sizes="(max-width: 700px) 130px, 160px" />
            </div>
            <span>Szacunek i słuchanie</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src={ourValueImageTwo} alt="Książka z żarówką" fill sizes="(max-width: 700px) 130px, 160px" />
            </div>
            <span>Edukacja i odkrywanie świata</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src={ourValueImageThree} alt="Trzy popiersia na okręgu" fill sizes="(max-width: 700px) 130px, 160px" />
            </div>
            <span>Równość i przynależność</span>
          </ValueCell>
        </li>
      </ul>
    </div>
  </StyledSection>
);
