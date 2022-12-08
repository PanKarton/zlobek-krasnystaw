import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const MainLogo = () => (
  <h1>
    <Link href="/" passHref>
      <a href="!#">
        <div className="logo-img-wrapper">
          <Image src="/images/main-logo.svg" alt="Logo żłobka z klockami" layout="fill" />
        </div>
      </a>
    </Link>
  </h1>
);
