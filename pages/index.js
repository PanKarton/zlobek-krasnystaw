import styled from 'styled-components';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

const Div = styled.div`
  height: 100vh;
  background-color: white;
`;

export default function Home() {
  return (
    <HomeTemplate>
      <Div />
    </HomeTemplate>
  );
}
