import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>this are my friends</h2>
        </div>
    );
};

export default Friends;