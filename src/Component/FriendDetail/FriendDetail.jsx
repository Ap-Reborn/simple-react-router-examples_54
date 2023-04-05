import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>everything about this person is here</h3>
            <h4>name: {friend.name}</h4>
            <p>phone: {friend.phone} </p>
        </div>
    );
};

export default FriendDetail;