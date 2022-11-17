import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ServiceCard from './ServiceCard';

const Service = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://the-flytographer-server.vercel.app/servicess')
            .then(res => res.json())
            .then(data => setService(data))
    })


    return (
        <div>

            <h2>The service what you want</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default Service;