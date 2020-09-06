import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setposts] = useState([]);


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>res.json())
        .then((data) => setposts(data))

    }, []);


    return (
        <div>
        
        {
        posts.map((post) =>  (<Post key = {post.id} post = {post} homePage = {true}></Post>
            ))}
        </div>
    );
};

export default Home;