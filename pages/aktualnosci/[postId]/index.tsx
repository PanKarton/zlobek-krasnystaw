import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import NewsPost from 'Components/Organisms/NewsPost/NewsPost';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { getEnv } from 'helpers/getEnv';

type Props = {
  googleApiKey: string;
};

const News = ({ googleApiKey }: Props) => {
  const article = {
    id: '3',
    title: 'Tajemniczy post o nie wiem czym',
    subTitle: 'Sprawdź, a się przekonasz',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum].',
    ],
    date: {
      day: 'środa',
      dayNum: '12',
      month: 'lipiec',
      year: '2022',
      dateMs: 12345,
    },
  };

  return (
    <SecondaryTemplate googleApiKey={googleApiKey} heading={article.title}>
      <NewsPost articleData={article} />
    </SecondaryTemplate>
  );
};

export default News;

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: getEnvVariable(process.env.GOOGLE_MAPS_API_KEY),
    },
  };
}
