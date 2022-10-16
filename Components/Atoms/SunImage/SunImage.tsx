import Image from 'next/image';
import React from 'react';
import sun from '../../../public/images/sun.png';

const SunImage: React.FC = () => <Image src={sun} alt="Żółte, uśmiechnięte słońce" layout="fill" />;

export default SunImage;
