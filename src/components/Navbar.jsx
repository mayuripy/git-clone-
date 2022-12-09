import React from 'react';
import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
//import theme from '../utils/Theme';
import {Link,Navigate,useNavigate } from 'react-router-dom';




const Container = styled.div`
 position:sticky;
 top: 0;
 height: 56px;

`;
const Wrapper = styled.div`
 display: flex; 
 align-items: center;
 justify-content: flex-end;
 height: 100%;
 padding: 0px 20px;
 position: relative;
 

 `;

 const User = styled.div`
  color: white
 `


const Search = styled.div`
width: 40%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-iten: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;


`;
const Input = styled.input`
border: none;
bacground-color: transparet;

` ;


const Button = styled.button`
 padding: 5px 15px;
 bacgrond-color: transparent;
 border: 1px solid: #3ea6ff;
 color: #086F83;
 border-radius: 3px;
 font-weight: 500px;
 cursor: pointer;
 display:flex;
 align-items: center;
 gap: 5px;
`;


const Navbar = () => {
  const navigate = useNavigate();
    return (
       <Container>
       <Wrapper>
         <Search>
          <Input placeholder="search"/>
          <SearchIcon/>
         </Search>
         <User>
           <VideoCallIcon onclick={()=> Navigate(`/search?=${'xyz'}`)} />
         </User>
          {/* <Link to="signin" styled={{ textDecoration: "none"}}> */}
          <Link to="signin" >
         <Button>
            <AccountCircleIcon />
                  SIGN IN
        </Button>
        </Link>
        {/* </Link> */}
        
        
            </Wrapper>
        </Container>
        

          
    );

};
 

export default Navbar;