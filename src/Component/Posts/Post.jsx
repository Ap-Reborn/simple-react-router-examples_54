import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h4>all posts show here {posts.length}</h4>
            <div>
                {
                    posts.map(post => <SinglePost
                    key={post.id}
                    post={post}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Post;