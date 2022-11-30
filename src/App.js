import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { findByLabelText } from "@testing-library/react";
import { darkTheme,lightTheme } from "./utils/Theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Video from "./Pages/Video.jsx";
import { useState } from "react";
import Home from "./Pages/Home";

const Container =styled.div`
display: flex;
`;




const Main = styled.div`
flex:7;
bacground-color: #181818;

`;

const Wrapper= styled.div`
padding: 22px 96px;
`;


function App() {
  const [darkMode,setDarkMode] = useState(true);

  return (
    // <ThemeProvider theme={(darkMode ? darkTheme : lightTheme)}>
     <Container>
      <Router>
      <Menu setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
           <Wrapper>
              {/* <Routers> */}
                <Routes>
                  <Route index element={<Home/>}/>
                  <Route exact path="video" element={<Video/>}/>
                  {/* <Route path=":id" /> */}
                </Routes>
              {/* </Routers> */}
           </Wrapper>
        
      </Main>
      </Router>
 </Container>
//  </ThemeProvider>
  );
}

export default App;
