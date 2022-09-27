import OurValues from 'Components/Molecules/OurValues/OurValues';
import Head from 'next/head';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

export default function Home() {
  return (
    <>
      <Head>
        <title>Żłobek Krasnystaw</title>
        <meta name="description" content="Żłobek miejski w Krasnymstawie" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <HomeTemplate>
        <OurValues />
        <div>aaaaaaaaaa</div>
      </HomeTemplate>
    </>
  );
}
