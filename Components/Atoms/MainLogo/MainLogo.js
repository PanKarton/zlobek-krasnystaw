import Image from 'next/image';
import Link from 'next/link';

const MainLogo = () => (
  <h1>
    <Link href="/" passHref>
      <a>
        <div className="logo-img-wrapper">
          <Image src="/images/main-logo.svg" alt="Logo żłobka z niebieską sową" layout="fill" />
        </div>
      </a>
    </Link>
  </h1>
);

export default MainLogo;
