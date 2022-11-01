import { NewsListSection } from 'Components/Organisms/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const News = () => {
  return (
    <SecondaryTemplate heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};
export default News;
