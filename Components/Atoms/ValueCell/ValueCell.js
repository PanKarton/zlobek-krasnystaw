import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > div {
    height: 10rem;
    width: 10rem;
    position: relative;
  }
  & > span {
    font-size: 2rem;
    color: #777777;
    font-family: var(--font-primary);
    font-weight: 600;
    text-align: center;
    line-height: 1.25;
  }
`;

const ValueCell = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default ValueCell;
