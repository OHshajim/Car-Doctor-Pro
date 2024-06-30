import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero  my-32 pb-44">
                <div className="flex container flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <Image
                            width={600} height={600} alt='aboutPhoto1' src="/images/about_us/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                        <Image
                            width={600} height={600} alt='aboutPhoto2' src="/images/about_us/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 left-1/3 border-8 border-white" />
                    </div>
                    <div className="lg:w-1/2">
                        <h4 className="text-primary font-semibold mb-3">About Us</h4>
                        <h1 className="text-2xl md:3xl xl:text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
                        <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <p className="py-6  text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <button className="btn  bg-primary text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;