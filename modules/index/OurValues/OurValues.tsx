import { ValueCell } from 'modules/index/ValueCell/ValueCell';
import Image from 'next/image';
import { StyledSection } from './OurVaues.styles';

export const OurValues = () => (
  <StyledSection>
    <div className="max-width-1440">
      <ul>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value1.svg" alt="dłoń z sercem" fill sizes="(max-width: 43.75rem) 8rem, 10rem" />
            </div>
            <span>Szacunek i słuchanie</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value2.svg" alt="Książka z żarówką" fill sizes="(max-width: 43.75rem) 8rem, 10rem" />
            </div>
            <span>Edukacja i odkrywanie świata</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value3.svg" alt="Trzy popiersia na okręgu" fill sizes="(max-width: 43.75rem) 8rem, 10rem" />
            </div>
            <span>Równość i przynależność</span>
          </ValueCell>
        </li>
      </ul>
    </div>
  </StyledSection>
);
