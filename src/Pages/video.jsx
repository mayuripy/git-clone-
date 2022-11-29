import React from 'react';
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplayIcon from '@mui/icons-material/Replay';
import AddTaskIcon from '@mui/icons-material/AddTask';


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
 color: ${({ theme}) => theme.text}
 `;


 const Details = styled.div`
  display: flex;
  align-items: center;
  jistify-content: space-between;

 
 `;
 const Info = styled.span`
 color: ${({ theme}) => theme.textsoft}
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
  border: 0.5px solid ${({theme}) => theme.soft};
 
 `;


 const Recommendation = styled.div`
 flex:2;
 
 `;
 const Video = () => {
  return (<Container>
    <Content>
      <VideoWrapper>
        <iframe
        width:"100%"
        height:"720"
        src="https://www.youtube.com/enbed/k3vfj-e1Ma4"
        title="youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipbord-writer; encrepted-medium; gyroscope; picture-in-picture "
        allowfullscreen
        
        </VideoWrapper>
      
        </Content>
        ></iframe>

      
      <Title>Test video</Title>
      <Details>
        <Info>7,948,154 views. jun 22,2022</Info>
        <Buttons>
         <ThumbUpOutlinedIcon /> 123
          <Botton>
            <ThumUpOutlinedIcon /> Dislike
          </Botton>
          <Botton>
            <ReplayOutlinedIcon /> Share
          </Botton>
          <Botton>
            <AddTaskOutlinedIcon /> Save
          </Botton>
        </Buttons>
      </Details>
      <Hr/>
      </Content>
    <RecommenDation>recommentation</RecommenDation>
    </Container>
  
  );
 };

  
 export default Video;