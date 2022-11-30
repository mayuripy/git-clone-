import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
//import theme from '../utils/Theme'
import styled from '@emotion/styled';


const Container = styled.div`
 position:sticky;
 top: 0;
 height: 56px;

`
const Wrapper = styled.div`
 display: flex; 
 align-items: center;
 justify-content: flex-end;
 height: 100%;
 padding: 0px 20px;
 position: relative;
 

 `


const Search = styled.div`
width: 40%;
position: absolute;
left: 50px;
right: 0px;
margin: auto;
display: flex;
align-iten: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;


`
const Input = styled.input`
border: none;
bacground-color: transparet;
` 


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
    return (
       <Container>
       <Wrapper>
         <Search>
          <Input placeholder="search"/>
          <SearchIcon/>
         </Search>
         <Button>
            <AccountCircleIcon />
                  SIGN IN
        </Button>
            </Wrapper>
        </Container>

          
    )

}
 

export default Navbar;