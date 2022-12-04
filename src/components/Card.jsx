import { Title } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container =styled.div`
  width: ${(props)=>props.type === "sm" ? "360px" : "500px"};
  margin-bottom: ${(props)=>props.type === "sm" ? "45px" : "80px"};
  cursor: pointer;
  display: ${(props)=>props.type === "sm" && "flex"};
  gap: 10px;

`;

const Image =styled.image`
  width: 100%;
  height:  ${(props)=>props.type !== "sm" ? "`12px" : "202px"};
  background-color: #999;
  flex: 1;

  
`;

const Texts = styled.div`
  color: white;
`;

const Info = styled.div`
  background-color: transparent;;
`


const Details =styled.div`
  display: flex;
  margin-top: ${(props)=>props.type === "sm" && "16px"};
  gap: 12px;

  
`;
const ChannelImage =styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"};
  `;

  
const YoutubeContainer = styled.div`
  width: 390px;
  height: 310px;
  overflow: hidden;
  border-radius: 5%;
`;


const Card = ({type}) => {
    return (
        <Link to="/video">
        <Container type={type}>
            {/* <Image src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"/> */}
            <YoutubeContainer><iframe width="400" height="300" src="https://www.youtube.com/embed/038jmlSH3iM" 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay;
              clipboard-write;
               encrypted-media;
                gyroscope; picture-in-picture"
                 allowFullScreen></iframe>
                 </YoutubeContainer>
         <Details>
            <ChannelImage/>
            <Texts>
            <Title>Test video</Title>
            <channelName>Lama Dev</channelName>
           <Info>660,908 views   .1 day ago</Info>
           </Texts>
         </Details>
        </Container>
        </Link>
    );
};


export default Card;