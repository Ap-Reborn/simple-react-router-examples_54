import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'
const SinglePost = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleWithNavigation = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h5>id: {id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show Detail</Link>

            <Link to={`/post/${id}`}><button>show post Details</button></Link>
            <button onClick={handleWithNavigation}>with button handler</button>
        </div>
    );
};

export default SinglePost;