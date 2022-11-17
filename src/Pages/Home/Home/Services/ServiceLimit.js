import React, { useEffect, useState } from 'react';
import ServiceLimitCard from './ServiceLimitCard';




const ServiceLimit = () => {

    const [service, setService] = useState([]);



    useEffect(() => {
        fetch('https://the-flytographer-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))
    })

    return (
        <div>
            <h2 className='text-center text-5xl font-bold'>The service what you want</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(service => <ServiceLimitCard
                        key={service._id}
                        service={service}
                    ></ServiceLimitCard>)
                }
            </div>
        </div>
    );
};

export default ServiceLimit;