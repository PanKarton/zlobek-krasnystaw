import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
};

export const ContactSectionListItem = ({ src, alt, children }: Props) => (
  <div className="li-flex-wrapper">
    <div className="icon-wrapper">
      <Image src={src} alt={alt} layout="fill" />
    </div>
    <div className="content">{children}</div>
  </div>
);
