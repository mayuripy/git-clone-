import React from 'react'
import styled from 'styled-components'
import LamaTube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

const Container = styled.div`
flex:1
background-color: #202020;
height: 100vh;
color: white;
font-size: 14px;
`
const Wrapper = styled.div`
 padding: 18px 26px;
`
 const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 25px;
`
  const Img =styled.img`
  height: 25px;
 `
 const Item = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 cursor: pointer;
 `
 const Login = styled.div``
 const Button = styled .button``
const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                   <Img src={LamaTube}/>
                    LamaTube
                </Logo>
                  <Item>
                    <HomeIcon/>
                    Home
                  </Item>
                  <Item>
                    <ExploreOutlinedIcon />
                    Explore
                  </Item>
                  <Item>
                    <PushPinOutlinedIcon/>
                    Home
                  </Item>
            </Wrapper>
        </Container>
    );

};

 export default Menu