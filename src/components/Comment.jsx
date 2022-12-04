import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
color: white ;

`;
const Avatar = styled.img`
width: 50px;
 height: 50px;
 border-radius: 50%;
`;
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: white;
`;
const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: white;
margin-left: 5px;

`;
const Text = styled.span`
font-size:14px;
`
const Comment = () => {
    return(
     <Container>
        <Avatar src={'https://th.bing.com/th/id/OIP.yfAab35qYd8XUFjM0P5_YwHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
            <Details>
                <Name>john Don<Date>1 day ago</Date> </Name>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
                </Text>
            </Details>
        {/* </Avatar> */}
        
     </Container>
    );
};

export default Comment;











