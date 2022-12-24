import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const MainLogo = () => (
  <h1>
    <Link href="/">
      <div className="logo-img-wrapper">
        <Image src="/images/main-logo.svg" alt="Logo żłobka z klockami" fill />
      </div>
    </Link>
  </h1>
);
