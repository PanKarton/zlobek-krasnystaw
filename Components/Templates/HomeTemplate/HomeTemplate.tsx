import { Footer } from 'modules/footer/Footer/Footer';
import { Header } from 'modules/header/Header/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const HomeTemplate = ({ children }: Props) => (
  <>
    {/* <Header /> */}
    {/* <main id="main-content">{children}</main> */}
    <Footer />
  </>
);
