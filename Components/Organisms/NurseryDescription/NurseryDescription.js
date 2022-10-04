import { StyledSection } from './NurseryDescription.styles';

const NurseryDescription = props => {
  const description = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
   aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
    dolore magnam aliquam quaerat voluptatem.`;

  return (
    <StyledSection>
      <div className="max-width">
        <article>
          <h3>O NASZYM PRZEDSZKOLU</h3>
          <p>{description}</p>
        </article>
      </div>
    </StyledSection>
  );
};

export default NurseryDescription;
