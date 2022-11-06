import { PageHeading } from 'Components/Atoms/PageHeading/PageHeading';
import { Footer } from 'modules/footer/Footer/Footer';
import { Header } from 'modules/header/Header/Header';

type Props = {
  children: import('react').ReactNode;
  heading?: string;
};

export const SecondaryTemplate = ({ children, heading }: Props) => (
  <>
    <Header isSecondary />
    <main>
      {heading && <PageHeading className="page-heading" headingText={heading}></PageHeading>}
      {children}
    </main>
    <Footer />
  </>
);
