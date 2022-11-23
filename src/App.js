import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { findByLabelText } from "@testing-library/react";

const Container =styled.div`
display: flex;
`;




const Main = styled.div`
flex:7
`;

const Wrapper= styled.div``;


function App() {
  return (
     <Container>
      <Menu />
      <Main>
        <Navbar />
           <Wrapper>
              video cards
           </Wrapper>
        
      </Main>

     </Container>
  );
}

export default App;
