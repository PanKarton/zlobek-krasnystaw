import { BsCalendarDateFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiMapPinFill } from 'react-icons/ri';
import styled from 'styled-components';

const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.gray500};
  padding-left: 1rem;
  margin-block: 2rem 1.5rem;
  .flex-wrapper {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  h2 {
    font-family: var(--font-primary);
    line-height: 1;
  }
  p {
    font-family: var(--font-secondary);
    font-size: 14px;
  }
  svg {
    color: ${({ theme }) => theme.color.pink};
  }
  & li > * {
    margin-top: 1rem;
  }
`;

const NavContactInfo = props => (
  <StyledSection className="nav-contact-details">
    <ul>
      <li>
        <div className="flex-wrapper">
          <BsCalendarDateFill />
          <div className="text-wrapper">
            <h2>Adres</h2>
            <p>Żłobek Miejski</p>
            <p>22-300 Krasnystaw ul. Poniatowskiego 48</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-wrapper">
          <BsFillTelephoneFill />
          <div className="text-wrapper">
            <h2>Kontakt</h2>
            <p>tel. 123 456 789 - dyrektor</p>
            <p>tel. 123 456 789 - sekretariat</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-wrapper">
          <RiMapPinFill />
          <div className="text-wrapper">
            <h2>Godziny otwarcia</h2>
            <p>Poniedziałek - Piątek</p>
            <p>6:00 - 16:00</p>
          </div>
        </div>
      </li>
    </ul>
  </StyledSection>
);

export default NavContactInfo;
