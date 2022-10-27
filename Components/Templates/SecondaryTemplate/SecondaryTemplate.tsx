import { PageHeading } from 'Components/Atoms/PageHeading/PageHeading';
import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';

type Props = {
  children: import('react').ReactNode;
  heading?: string;
};

const SecondaryTemplate = ({ children, heading }: Props) => (
  <>
    <Header isSecondary />
    <main>
      {heading && <PageHeading className="page-heading" headingText={heading}></PageHeading>}
      {children}
    </main>
    <Footer />
  </>
);

export default SecondaryTemplate;
