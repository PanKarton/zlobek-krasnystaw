import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  src: string;
  altText: string;
  children: ReactNode;
};

export const ContactSectionListItem = ({ src, altText, children }: Props) => (
  <div className="li-flex-wrapper">
    <div className="icon-wrapper">
      <Image src={src} alt={altText} layout="fill" />
    </div>
    <div className="content">{children}</div>
  </div>
);
