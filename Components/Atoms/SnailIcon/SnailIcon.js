import Image from 'next/image';

const SnailIcon = props => (
  <div className="snail-image-wrapper">
    <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
  </div>
);

export default SnailIcon;
