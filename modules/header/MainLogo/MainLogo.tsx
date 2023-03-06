import Link from 'next/link';
import Image from 'next/image';
import mainLogo from 'public/images/main-logo.svg';

export const MainLogo = () => (
  <h1>
    <Link href="/">
      <div className="logo-img-wrapper">
        <Image src={mainLogo} alt="Logo żłobka z klockami" fill sizes="(max-width: 1440px) 90px, 120px" />
      </div>
    </Link>
  </h1>
);
