import Image from 'next/image';
import React from 'react';

export const SnailIcon = () => (
  <div className="snail-image-wrapper">
    <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
  </div>
);
