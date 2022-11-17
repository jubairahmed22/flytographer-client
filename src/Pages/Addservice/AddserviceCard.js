import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AddserviceCardTwo from './AddserviceCardTwo';

const AddserviceCard = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://the-flytographer-server.vercel.app/collection`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (


        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                orders.map(order => <AddserviceCardTwo
                    key={order._id}
                    order={order}
                ></AddserviceCardTwo>)
            }
        </div>
    );
};

export default AddserviceCard; <h2>This is addservice card</h2>