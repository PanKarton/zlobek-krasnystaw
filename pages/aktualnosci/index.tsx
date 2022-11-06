import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const News = () => {
  return (
    <SecondaryTemplate heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};
export default News;
