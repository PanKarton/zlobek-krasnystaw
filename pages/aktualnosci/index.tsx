import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import {Props} from '../../types/newsPosts';
import { GetStaticProps } from 'next';


const News = ({ posts }: Props) => {
  console.log(posts);

  return (
    <SecondaryTemplate heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};
export default News;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('http://localhost:1337/api/news-posts');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };

}
