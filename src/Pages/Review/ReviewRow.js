import React, { useEffect, useState } from 'react';

const ReviewRow = ({ order, handleDelete }) => {
    const { _id, serviceName, phone, customer, price, service, message } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://the-flytographer-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 bg-primary w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>

                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                {/* MODAL ADDED */}

                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn">EDIT</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default ReviewRow;