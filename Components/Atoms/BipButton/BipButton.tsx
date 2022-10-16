import Image from 'next/image';
import React from 'react';

const BipButton: React.FC = () => (
  <a
    href="https://zmkrasnystaw.bip.lubelskie.pl/index.php?id=6"
    target="_blank"
    rel="noreferrer"
    aria-label="Przycisk przekierowujący do biuletynu informacji publicznej"
  >
    <div className="nav-bip-image-wrapper" style={{ position: 'relative' }}>
      <Image
        src="/images/bip.jpg"
        alt="Czerwono białe logo biuletynu informacji publicznej"
        layout="fill"
      />
    </div>
  </a>
);

export default BipButton;
