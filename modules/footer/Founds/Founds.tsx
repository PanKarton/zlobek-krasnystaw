import cityLogo from 'public/images/maluch-plus.jpg';
import maluchPlusLogo from 'public/images/krasnystaw-logo.jpg';
import Image from 'next/image';
import { StyledWrapper, Found } from './Funds.styles';

export const Founds = () => {
  return (
    <StyledWrapper>
      <Found>
        <div className="img-wrapper">
          <Image src={cityLogo} alt="logo programu maluch plus 2017" fill sizes="5rem" />
        </div>
        <p>
          Żłobek dofinansowany jest z programu <span className="blue-text">MALUCH + 2017</span>
        </p>
      </Found>
      <Found>
        <div className="img-wrapper">
          <Image src={maluchPlusLogo} alt="logo miasta Krasnystaw" fill sizes="5rem" />
        </div>
        <p>
          Honorujemy <span className="bold-text">Kartę Dużej Rodziny</span> miasta Krasnystaw
        </p>
      </Found>
    </StyledWrapper>
  );
};
