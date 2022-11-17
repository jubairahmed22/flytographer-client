import React from 'react';

const AddserviceCardTwo = ({ order }) => {
    const { message, customer } = order
    return (
        <div className="card w-96 bg-primary text-primary-content m-5">
            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default AddserviceCardTwo; 