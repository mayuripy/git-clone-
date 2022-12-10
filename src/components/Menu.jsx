import React from 'react'
import styled from 'styled-components'
import LamaTube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/LocalLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsports';
import MovieOutlinedIcon from '@mui/icons-material/Movie';
import ArticleOutlinedIcon from '@mui/icons-material/Article';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/Flag';
import HelpOutlinedIcon from '@mui/icons-material/Help';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightness';
import {Link} from "react-router-dom";

const Container = styled.div`
flex:1;
background-color: white;
height: 100vh;
color: white;
font-size: 14px;
position: sticky;
top: 0;
`;


const Wrapper = styled.div`
 padding: 18px 26px;
`;
 const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 25px;
`;
  const Img =styled.img`
  height: 25px;
 `;
 const Item = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 cursor: pointer;
 padding: 7.5px 0px;

`;

 const Hr = styled.hr`
 margin: 15px 0px;
 border: 0.5px solid black};

 `;
 const Login = styled.div``;
 
 const Button = styled .button`
 padding: 5px 15px;
 bacgrond-color: transparent;
 border: 1px solid: #3ea6ff;
 color: #3ea6ff;
 border-radius: 3px;
 font-weight: bold;
 margin-top: 10px;
 cursor: pointer;
 display:flex;
 align-items: center;
 gap: 5px;
 `;

 const Title = styled.h2;`
 font-Size: 14px;
 font-weight: 500px;
 color: #aaaaaa;
 margin-bottom: 20px;
`;
 
const Menu = (darkMode,setDarkMode) => {
    return (
        <Container>
            <Wrapper>
               <Link to="video/test" style={{textDecoration:"none",color:"inherite"}}>
                <Logo>
                   <Img src={LamaTube}/>
                    LamaTube
                </Logo>
                </Link>
                  <Item>
                    <HomeIcon/>
                    Home
                  </Item>
                  <Item>
                    <ExploreOutlinedIcon />
                    Explore
                  </Item>
                  <Item>
                    <subscriptionsIcon/>
                    subscription
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    Library
                  </Item>
                  <Item>
                    <HistoryIcon/>
                     History
                  </Item>
                  <Hr/>
                  <Login>
                    sign in to like video,comment and subscriner <br/>
                  <Link to="signin" stylel={{textDecoration:"none"}}>
                  <Button>
                    <AccountCircleIcon />
                  SIGN IN
                  </Button>
                  </Link> 
                  </Login>

                  <Hr/>
                  <Title>BEST OF LAMA</Title>
                  <Item>
                    <LibraryMusicOutlinedIcon/>
                    Music
                  </Item>
                  <Item>
                    <SportsBasketballIcon/>
                    Sport
                  </Item>
                  <Item>
                    <SportsEsportsOutlinedIcon/>
                    Gaming
                  </Item>
                  <Item>
                    <MovieOutlinedIcon/>
                    Movies
                  </Item>
                  <Item>
                    <ArticleOutlinedIcon/>
                    News
                  </Item>
                  <Item>
                    <LiveTvOutlinedIcon/>
                    Live
                  </Item>
                  <Hr/>
                  <Item>
                    <SettingsOutlinedIcon/>
                    Setting
                  </Item>
                  <Item>
                    <FlagOutlinedIcon/>
                    Report
                  </Item>
                  <Item>
                    <HelpOutlinedIcon/>
                    Help
                  </Item>
                  <Item onclick={() =>setDarkMode(!darkMode)}/>
                  <Item>
                    <SettingsBrightnessOutlinedIcon/>
                   { darkMode ? "Light":"dark"}
                  </Item>

            </Wrapper>
        </Container>
    );

};

 export default Menu;