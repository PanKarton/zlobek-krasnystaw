import { PageHeading } from 'Components/Atoms/PageHeading/PageHeading';
import { Footer } from 'modules/footer/Footer/Footer';
import { Header } from 'modules/header/Header/Header';
import { ReactNode } from 'react';
import { StyledMain } from './SecondaryTemplate.styles';

type Props = {
  children: ReactNode;
  heading?: string;
  returnHref?: string;
};

export const SecondaryTemplate = ({ children, heading, returnHref }: Props) => (
  <>
    {/* <Header isSecondary />
    <StyledMain>
      {heading && <PageHeading className="page-heading" headingText={heading} returnHref={returnHref}></PageHeading>}
      {children}
    </StyledMain> */}
    <Footer />
  </>
);
