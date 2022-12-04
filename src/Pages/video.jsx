import React from 'react';
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ThumbDown } from '@mui/icons-material';
import ReplayIcon from '@mui/icons-material/Replay';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Card from '../components/Card';
import Comment from '../components/Comment';


 const  Container =styled.div`
 display: flex;
 flex-direction: row;
  gap:24px;
  color:white;
  
 `;
 const Content =styled.div`
  flex:5;

 `;
 const Videowrapper = styled.div`
  width: 720px;
  height: 480px;
  border-radius: 10px;
 
 `;

 const Title = styled.h1`
 font-size: 18px;
 font-weight: 400; 
 margin-top: 20px;
 margin-bottom: 10px
 `;


 const Details = styled.div`
  display: flex;
  align-items: center;
  jistify-content: space-between;

 
 `;
 const Info = styled.span`
 `;
 const Buttons = styled.div`
 display: flex;
 gap: 20px;
 `;
 const Button = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 cursor: Pointer;
 `;
 const Hr = styled.hr`
  margin: 20px;
  border: 0.5px solid white;
 
 `;


 
 
 const Channel = styled.div`
 display: flex;
 justify-content: space-between;
 `;

 const ChannelInfo = styled.div`
  display: flax;
  gap: 20px;

 `;
 const Image = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;

 `;

 const Comments = styled.div`
  background-color: transparent;
 `

 const Recommendation = styled.div`
 background-color: transparent;
 `

 const ChannelDetail = styled.div`
  display: flax;
  flax-direction: column;

 `;
 const ChannelName = styled.span`
 font-weight: 500;

 `;
 const Channelcounter = styled.span`
 margin-top: 5px;
 margin-bottom: 20px;
 font-size: 12px;
 `;
 const Description = styled.p`
 font-size: 14px;

 `;
 const Subscribe = styled.button`
 ground-color: #cc1a00;
 font-weight: 300;
 color: white;
 border: none;
 border-radius: 3px;
 height:max-content;
 padding: 10px 20px;
 cursor: pointer;
 `;
 const VideoFrame = styled.video`
 max-height: 720px;
 width: 100p;
 object-fit: cover;
 `;


 const Video = () => {
  return (
  <Container>
    <Content>
      <Videowrapper>

      <iframe width="730" height="500" src="https://www.youtube.com/embed/038jmlSH3iM" 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay;
              clipboard-write;
               encrypted-media;
                gyroscope; picture-in-picture"
                 allowFullScreen></iframe>
        
        </Videowrapper>
        

      
      <Title>Test video</Title>
      <Details>
        <Info>7,948,154 views. jun 22,2022</Info>
        <Buttons>
         <ThumbUpIcon /> 123
          <Button>
            <ThumbDown /> Dislike
          </Button>
          <Button>
            <ReplayIcon /> Share
          </Button>
          <Button>
            <AddTaskIcon /> Save
          </Button>
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
        <ChannelInfo>
          <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
          <ChannelDetail>
            <ChannelName>Lama Dev</ChannelName>
            <Channelcounter>200k subscribers</Channelcounter>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr/>
      <Comment />
      </Content>
      
    <Recommendation> 
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />

    </Recommendation>
    </Container>
  
  );
 };

  
 export default Video;