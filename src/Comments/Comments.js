import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment/SingleComment';

const Comments = (props) => {
    const [comments,setComments] = useState([])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.commentId}/comments`)
        .then((res)=> res.json())
        .then ((data) => setComments(data))

    },[props.commentId])
    return (
        <div>
            <h2>Comments</h2>
            {
            comments.map((comment) =>   (<SingleComment comment = {comment} key = {comment.id}></SingleComment>))
            }
        </div>
    );
};

export default Comments;