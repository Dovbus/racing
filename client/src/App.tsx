import { RacingTable } from './components/RacingTable';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #ff9900;
  background: #fff4a3;
  padding: 0.5rem 0;
`;

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Title>Horse Racing</Title>
      <RacingTable />
    </Wrapper>
  );
}

export default App;
