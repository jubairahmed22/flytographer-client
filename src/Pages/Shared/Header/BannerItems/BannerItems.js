import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl allimg" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold bannertitle text-white headertext'>
                    In the world of photography, you get to share a captured moment <br /> with other people. <br />
                </h1>
            </div>
            <div className="absolute flex bannerOut justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>It’s no wonder that photography quotes are one of the most popular things to share on social media, usually by other photographers, of course.</p>
            </div>

            <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn bg-primary btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn bg-primary btn-circle">❯</a>
            </div>


        </div>
    );
};

export default BannerItems;