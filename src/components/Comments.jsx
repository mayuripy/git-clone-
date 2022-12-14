import React from 'react';
import styled from '@emotion/styled';
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Avatar = styled.img`
width: 50px;
 height: 50px;
 border-radius: 50%;
`;


const Input = styled.input`
border:none;
border-bottom: 1px solid black;
background-color: transparent;
outline:none;
padding: 5px;
width: 100%;
`;

const Comments = () => {
    return(
        <Container>
            <NewComment>
                <Avatar>
                <Input placeholder="Add a comment..."/>
                
                </Avatar>
            </NewComment>
             <Comments />
             <Comments />
             <Comments />
             <Comments />
             <Comments />
             <Comments />
             <Comments />
             <Comments />
        </Container>
    );
};

export default Comments;