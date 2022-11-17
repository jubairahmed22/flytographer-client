import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LinkReview = () => {
    const jub = useLoaderData()

    console.log(jub);

    return (
        <div>

            <h2>This is link review </h2>
        </div>
    );
};

export default LinkReview;