import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,useId,body} = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Detail about your post: {id}</h3>
            <h5>{title}</h5>
            <h5><small>{body}</small></h5>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetail;