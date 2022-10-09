import { PageHeading } from 'Components/Atoms/PageHeading/PageHeading';
import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';

const SecondaryTemplate = ({ children, heading }) => (
  <>
    <Header isSecondary />
    <main>
      <PageHeading className="page-heading" headingText={heading}></PageHeading>
      {children}
    </main>
    <Footer />
  </>
);

export default SecondaryTemplate;
