import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Shared/Header/Banner/Banner';
import Service from './Services/Service';
import ServiceLimit from './Services/ServiceLimit';

import './Home.css'
import Imagine from '../../Imagine/Imagine';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceLimit></ServiceLimit>


            <Link className="btn btn-info seemore" to='/service'>See More</Link>
            <Imagine></Imagine>

        </div>
    );
};

export default Home; <h2>This is home</h2>