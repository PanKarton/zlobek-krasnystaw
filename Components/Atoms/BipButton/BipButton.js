import Image from 'next/image';

const BipButton = props => (
  <a
    href="https://zmkrasnystaw.bip.lubelskie.pl/index.php?id=6"
    target="_blank"
    rel="noreferrer"
    aria-label="Przycisk przekierowujący do biuletynu informacji publicznej"
  >
    <div className="nav-bip-image-wrapper">
      <Image
        src="/images/bip.jpg"
        alt="Czerwono białe logo biuletynu informacji publicznej"
        layout="fill"
      />
    </div>
  </a>
);

export default BipButton;
