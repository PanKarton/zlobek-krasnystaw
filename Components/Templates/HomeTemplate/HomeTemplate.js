import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';

const HomeTemplate = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default HomeTemplate;
