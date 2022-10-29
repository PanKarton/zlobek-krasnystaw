import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  googleApiKey: string;
};

const HomeTemplate = ({ children, googleApiKey }: Props) => (
  <>
    <Header />
    <main id="main-content">{children}</main>
    <Footer googleApiKey={googleApiKey} />
  </>
);

export default HomeTemplate;
