import Image from 'next/image';
import { StyledArticle, StyledSection } from './NurseryDescription.styles';

const NurseryDescription = props => {
  const descriptionOne = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa  quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun explicabo..  `;
  const descriptionTwo = `Nemo enim ipsam voluptatem quia voluptas sit  aspernatur aut odit aut fugit, sed quia conseqsuuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`;

  return (
    <StyledSection>
      <div className="max-width">
        <div className="flex-wrapper">
          <StyledArticle>
            <div className="flex-wrapper">
              <h3>O nas słów kilka</h3>
              <p>{descriptionOne}</p>
              <p>{descriptionTwo}</p>
            </div>
          </StyledArticle>
          <div className="description-image-wrapper">
            <Image
              src="/images/description-solar-system.svg"
              alt="Układ planetarny z dłońmi wskazujacymi na jego środek"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default NurseryDescription;
