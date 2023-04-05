import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css'
const SinglePost = ({post}) => {
    const {id,title,body}=post;

    return (
        <div className='post'>
     <h5>id: {id}</h5>
     <h5>{title}</h5>
     <Link to={`/post/${id}`}>Show Detail</Link>

     <button>show post Details</button>
        </div>
    );
};

export default SinglePost;