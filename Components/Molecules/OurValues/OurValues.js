import ValueCell from 'Components/Atoms/ValueCell/ValueCell';
import Image from 'next/image';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;
  & > ul {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    translate: 0 -5%;
    @media screen and (min-width: 960px) {
      translate: 0 -30%;
    }
    @media screen and (min-width: 900px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-wrap: wrap;
      translate: 0 -10%;
    }
  }
`;

const OurValues = props => (
  <StyledSection>
    <ul className='max-width"'>
      <li>
        <ValueCell>
          <div>
            <Image
              src="/images/our-value1.svg"
              alt="dłoń z sercem"
              layout="fill"
              width="160"
              height="160"
            />
          </div>
          <span>Szacunek i słuchanie</span>
        </ValueCell>
      </li>
      <li>
        <ValueCell>
          <div>
            <Image
              src="/images/our-value2.svg"
              alt="Książka z żarówką"
              layout="fill"
              width="160"
              height="160"
            />
          </div>
          <span>Edukacja i odkrywanie świata</span>
        </ValueCell>
      </li>
      <li>
        <ValueCell>
          <div>
            <Image
              src="/images/our-value3.svg"
              alt="Trzy popiersia na okręgu"
              layout="fill"
              width="160"
              height="160"
            />
          </div>
          <span>Równość i przynależność</span>
        </ValueCell>
      </li>
    </ul>
  </StyledSection>
);

export default OurValues;
