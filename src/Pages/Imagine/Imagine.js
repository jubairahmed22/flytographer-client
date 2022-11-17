import React from 'react';

const Imagine = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center text-5xl font-bold'>Membership</h1>

            {/* daisy ui collaps */}
            <div >
                <div tabIndex={0} className="collapse group mt-10">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>$35  Student/Senior 65+/Alumni</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p> Subscription to the CENTER Newsletter
                            Discounts on our Call for Entry fees
                            Exhibition Invitations
                            Invitations to Networking Showcases
                            Discounts on portfolio reviews, workshops, and seminars
                            NEW in 2022 | Access to CENTER’s Circle – Special Content + Resources</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-10">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>$55 – Individual</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>
                            Subscription to the CENTER Newsletter
                            Discounts on our Call for Entry fees
                            Exhibition Invitations
                            Invitations to Networking Showcases
                            Discounts on portfolio reviews, workshops, and seminars
                            NEW in 2022 | Access to CENTER’s Circle – Special Content + Resources
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-10">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>$120 – Supporting</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>
                            All of the above benefits +
                            Featured work in the Member’s Listing
                            A 40-minute consultation with a CENTER expert
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group mt-10 m-20px">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <h1>$300 – Patron</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p> Subscription to the CENTER Newsletter
                            Discounts on our Call for Entry fees
                            Exhibition Invitations
                            Invitations to Networking Showcases
                            Discounts on portfolio reviews, workshops, and seminars
                            NEW in 2022 | Access to CENTER’s Circle – Special Content + Resources</p>
                    </div>
                </div>
            </div>
            {/* collaps end */}
            <div className='mt-20px'>
                <h1 className='mt-20px text-center text-5xl font-bold my-20'>DONATE</h1>

                <div className='drop-shadow-xl bg-info p-10 my-10 '>
                    <h1 className='text-white text-3xl'>Photographer’s Scholarship Fund</h1>
                    <h3 className='text-white text-2xl'>Contribute to your community by donating to the Photographer’s Scholarship Fund. Your donation in any amount is welcome and helps to keep the programs accessible to photographers of all income levels. Photographer Scholarships are allocated to those who have been juried into Review Santa Fe but are unable to attend without financial support.</h3>
                    <br />
                    <br />
                    <h1 className='text-white text-3xl'>Your gift will provide:</h1>
                    <p className='text-white text-xl'>
                        $1-$399
                        <br />
                        $400
                        <br />
                        $800
                        <br />
                        $1500
                        <br />
                        partial scholarship
                        <br />
                        half scholarship
                        <br />
                        full scholarship
                        <br />
                        full scholarship, travel and accommodations
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Imagine;