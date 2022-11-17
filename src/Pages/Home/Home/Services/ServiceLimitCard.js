import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceLimitCard = ({ service }) => {
    const { _id, img, price, title, description
    } = service;
    return (
        <div className="card w-96 glass m-10">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='cardimg' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id} `} className="btn btn-primary">Service</Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceLimitCard;