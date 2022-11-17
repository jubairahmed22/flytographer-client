import React, { useContext, useEffect, useState } from 'react';
import { } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Finalcomments from './Finalcomments';

const Allcommnet = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://the-flytographer-server.vercel.app/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);

    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-blue-900'>Others Review</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    orders.map(service => <Finalcomments
                        key={service._id}
                        service={service}
                    ></Finalcomments>)
                }
            </div>

        </div>
    );
};
export default Allcommnet;