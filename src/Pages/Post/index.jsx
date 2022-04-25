import React, { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './style.css'

function Post() {
    const [post,setPost] = useState({})
    const location = useLocation();
    const postID = location.pathname;
    const safeDescription = DOMPurify.sanitize(post.content)

    const getPostByID = () => {
        fetch(`https://radiant-stream-23882.herokuapp.com/api/v1/${postID}`)
        .then(response => response.json())
        .then(result => setPost(result.data));
    }
    useEffect(() => {
        getPostByID()
    },[])

    return (
        <div className='post'>
            <p  dangerouslySetInnerHTML={{ __html: safeDescription }}></p>
        </div>
    );
}

export default Post;