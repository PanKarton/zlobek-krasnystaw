import Image from 'next/image';

export const BipButton = () => (
  <a
    href="https://zmkrasnystaw.bip.lubelskie.pl/index.php?id=6"
    target="_blank"
    rel="noreferrer"
    aria-label="Przycisk przekierowujący do biuletynu informacji publicznej">
    <div style={{ position: 'relative', height: '100%' }}>
      <Image src="/images/bip.jpg" alt="Czerwono białe logo biuletynu informacji publicznej" fill sizes="167px" />
    </div>
  </a>
);
