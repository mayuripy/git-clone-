import React from 'react';
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplayIcon from '@mui/icons-material/Replay';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { ThumbDown } from '@mui/icons-material';


 const  Container =styled.div`
  display:flex;
  gap:24px;
 `;
 const Content =styled.div`
  flex:5;

 `;
 const Videowrapper = styled.div`
 
 
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


 const Recommendation = styled.div`
 flex:2;
 
 `;
 const Video = () => {
  return (
  <Container>
    <Content>
      <Videowrapper>

        <iframe
        width="100%"
        height="720"
        src="https://www.youtube.com/enbed/k3vfj-e1Ma4"
        title="youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipbord-writer; encrepted-medium; gyroscope; picture-in-picture "
        allowfullscreen
        />
        
        </Videowrapper>
        </Content>

      
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
    <Recommendation>recommentation</Recommendation>
    </Container>
  
  );
 };

  
 export default Video;