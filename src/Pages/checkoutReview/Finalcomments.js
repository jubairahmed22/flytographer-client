import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Finalcomments = ({ service }) => {
    const { email, customer, message, serviceName } = service;



    return (
        <div>

            <div className='grid gap-1 grid-cols-1 font-bold text-teal-50 md:grid-cols-2 lg:grid-cols-1 bg-primary p-5 text-2xl rounded-lg m-5' >



                <h1>{serviceName}</h1>
                <h2>User: {email}</h2>
                <h2>Name: {customer}</h2>
                <h2>Review: {message}</h2>
            </div>

        </div>

    );
};

export default Finalcomments;