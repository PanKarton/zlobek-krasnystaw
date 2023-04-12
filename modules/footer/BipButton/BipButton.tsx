import Image from 'next/image';
import bipImage from 'public/images/bip.jpg';

export const BipButton = () => (
  <a
    href="https://zmkrasnystaw.bip.lubelskie.pl/index.php?id=6"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Przycisk przekierowujący do biuletynu informacji publicznej. Otwiera się w nowym oknie">
    <div style={{ position: 'relative', height: '100%' }}>
      <Image src={bipImage} alt="Czerwono białe logo biuletynu informacji publicznej" fill sizes="167px" />
    </div>
  </a>
);
