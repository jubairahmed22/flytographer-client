import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Allcommnet from './Allcommnet';
import './Checkout.css'

const Checkout = () => {
    const { _id, title, price } = useLoaderData();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;

        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,

            message
        }

        fetch('https://the-flytographer-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('you reviewd successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er))

    }

    const { user } = useContext(AuthContext);
    return (
        <div>


            <form onSubmit={handlePlaceOrder}>

                <div className='chekfrom'>
                    <h2 className='title'>Your Review</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-1/2  input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-1/2  input-bordered" />

                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-1/2  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-18 w-1/2" placeholder="Your Review" required></textarea>

                    <div>
                        <input className='btn btn-info' type="submit" value="Your Review" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout; 