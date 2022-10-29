import { PageHeading } from 'Components/Atoms/PageHeading/PageHeading';
import Footer from 'Components/Organisms/Footer/Footer';
import Header from 'Components/Organisms/Header/Header';

type Props = {
  children: import('react').ReactNode;
  heading?: string;
  googleApiKey: string;
};

const SecondaryTemplate = ({ children, heading, googleApiKey }: Props) => (
  <>
    <Header isSecondary />
    <main>
      {heading && <PageHeading className="page-heading" headingText={heading}></PageHeading>}
      {children}
    </main>
    <Footer googleApiKey={googleApiKey} />
  </>
);

export default SecondaryTemplate;
