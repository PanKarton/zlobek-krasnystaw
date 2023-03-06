import Image from 'next/image';
import snailImage from 'public/images/snail.svg';

export const SnailIcon = () => (
  <div className="snail-image-wrapper">
    <Image src={snailImage} alt="Różowy ślimak" fill sizes="1.875rem" />
  </div>
);
