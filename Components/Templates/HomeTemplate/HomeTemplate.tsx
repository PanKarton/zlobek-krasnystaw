import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HomeTemplate = ({ children }: Props) => (
  <>
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
  </>
);

export default HomeTemplate;
