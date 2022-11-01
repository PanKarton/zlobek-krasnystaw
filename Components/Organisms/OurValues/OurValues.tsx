import { ValueCell } from 'Components/Atoms/ValueCell/ValueCell';
import Image from 'next/image';
import { StyledSection } from './OurVaues.styles';

export const OurValues = () => (
  <StyledSection>
    <div className="max-width-1440">
      <ul>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value1.svg" alt="dłoń z sercem" layout="fill" />
            </div>
            <span>Szacunek i słuchanie</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value2.svg" alt="Książka z żarówką" layout="fill" />
            </div>
            <span>Edukacja i odkrywanie świata</span>
          </ValueCell>
        </li>
        <li>
          <ValueCell>
            <div>
              <Image src="/images/our-value3.svg" alt="Trzy popiersia na okręgu" layout="fill" />
            </div>
            <span>Równość i przynależność</span>
          </ValueCell>
        </li>
      </ul>
    </div>
  </StyledSection>
);
