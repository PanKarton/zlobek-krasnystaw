import Header from 'Components/Organisms/Header/Header';

const HomeTemplate = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default HomeTemplate;
