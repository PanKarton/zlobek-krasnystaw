import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const MainLogo = () => (
  <h1>
    <Link href="/" passHref>
      <a href="!#">
        <div className="logo-img-wrapper">
          <Image src="/images/main-logo2.svg" alt="Logo żłobka z niebieską sową" layout="fill" />
        </div>
      </a>
    </Link>
  </h1>
);
