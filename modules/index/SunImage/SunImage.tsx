import Image from 'next/image';
import sun from 'public/images/sun.png';

export const SunImage = () => <Image src={sun} alt="Żółte, uśmiechnięte słońce" fill sizes="(max-width: 1550px) 130px, 200px" />;
