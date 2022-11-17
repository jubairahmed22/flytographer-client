import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Addservice.css'

const Addservice = () => {

    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;


        const email = user?.email || 'unregistered';
        const title = form.title.value;
        const description = form.message.value;
        const img = form.imageURL.value;

        const price = form.price.value;

        const order = {
            email,
            title,
            price,
            description,
            img
        }

        fetch('https://the-flytographer-server.vercel.app/services', {
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
                    alert('Successfully added')
                    form.reset();
                }
            })
            .catch(er => console.error(er))


    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder} className="p-10 ">
                <div className='chekfrom'>
                    <textarea name="title" className="textarea textarea-bordered h-18 w-2/3"
                        placeholder="title" required>

                    </textarea>

                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-1/2  input-bordered" readOnly />
                    </div>
                    <div>
                        <input className='imgurl' type="url" name="imageURL" placeholder='image url' id="" />
                    </div>
                    <textarea name="price" className="textarea textarea-bordered h-18 w-1/2"
                        placeholder="price" required>

                    </textarea>

                    <textarea name="message" className="textarea textarea-bordered h-18 w-1/2" placeholder="description" required>

                    </textarea>

                    <div>
                        <input className='btn btn-info' type="submit" value="Add service" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addservice;