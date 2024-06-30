import Image from 'next/image';
import React from 'react';

const Banner = () => {
    const banners = [
        {
            next: "#slide2",
            prev: "#slide4",
        },
        {
            next: "#slide3",
            prev: "#slide1",
        },
        {
            next: "#slide4",
            prev: "#slide2",
        },
        {
            next: "#slide1",
            prev: "#slide3",
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full mt-5 ">
                {
                    banners.map((ban,index) => <div key={ban.prev} id={`slide${index+1}`} className="carousel-item relative w-full">
                        <Image height={800} width={800} alt='banner' src={`/images/banner/${index + 1}.jpg`} className="w-full max-h-[800px] rounded-xl" />
                        <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                            <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20 ">
                                <h1 className="text-2xl md:5xl xl:text-7xl font-bold md:pb-7">Affordable Price For Car Servicing</h1>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-5 items-center">
                                    <button className="btn btn-primary  ">Discover More</button>
                                    <button className="btn  btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                            <a href={ban.prev} className="btn btn-circle">❮</a>
                            <a href={ban.next} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Banner;