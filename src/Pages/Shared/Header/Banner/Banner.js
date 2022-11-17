import React from 'react';
import img1 from '../../../../images/img1.jpg';
import img2 from '../../../../images/img2.jpeg';
import img3 from '../../../../images/img3.jpeg';
import img4 from '../../../../images/img4.jpg';
import BannerItems from '../BannerItems/BannerItems';


const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }

        </div>
    );
};

export default Banner;