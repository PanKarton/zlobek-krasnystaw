import Image from 'next/image';
import Link from 'next/link';

const MainLogo = ({ priority }) => (
  <h1>
    <Link href="/" passHref>
      <a>
        <div className="logo-img-wrapper">
          <Image
            src="/images/main-logo.svg"
            alt="Logo żłobka z niebieską sową"
            layout="fill"
            width="100"
            height="40"
          />
        </div>
      </a>
    </Link>
  </h1>
);

export default MainLogo;
