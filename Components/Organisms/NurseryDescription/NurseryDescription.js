import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  .max-width {
    margin-inline: auto;
  }
  article {
    padding-top: 1.5rem;
    padding-bottom: clamp(2rem, 100vw, 4rem);
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: clamp(1.5rem, 3.5vw, 2.5rem);
      font-family: var(--font-primary);
    }
    p {
      margin-top: 1rem;
      font-family: var(--font-secondary);
      font-size: clamp(1rem, 2.2vw, 1.5rem);
      line-height: 1.4;
      letter-spacing: 1px;
      max-width: 70ch;
      @media screen and (min-width: 900px) {
        line-height: 1.8;
      }
    }
  }
`;

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
