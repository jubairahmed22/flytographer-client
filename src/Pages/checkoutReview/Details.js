import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Allcommnet from './Allcommnet';
import Checkout from './Checkout';
import './Details.css'

const Details = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const { _id, title, price, img, description } = details


    return (
        <div>


            <div className='m-20'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>


                    </div>
                </div>

            </div>
            {
                user?.email ?
                    <>
                        <Checkout></Checkout>

                    </>
                    :
                    <Link to='/login' className='loginReview'>Please Log In to Review</Link>
            }

            <Allcommnet></Allcommnet>
        </div>
    );
};

export default Details;