"use client";

import {  FaFacebookF } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

// import Swal from 'sweetalert2';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {

    // const location = useLocation()
    // const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        // Login(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         Swal.fire({
        //             title: "Welcome",
        //             text: "Successfully logged in",
        //             icon: "success",
        //             confirmButtonText: 'ok'
        //         });

        //         navigate(location?.state ? location?.state : '/')

        //     })
        //     .catch(error => {
        //         console.log(error)
        //         Swal.fire({
        //             title: "Failed",
        //             text: "try again",
        //             icon: "error",
        //             confirmButtonText: 'ok'
        //         });

            // })
    }
    return (
        <div className='bg-base-100 '>
            <div className="hero container mx-auto py-20 ">
                <div className="hero-content flex-col  w-full lg:flex-row items-center">
                    <div className=" lg:text-left w-full lg:w-1/2 flex justify-center">
                        <Image width={600} height={500} src='/images/login/login.svg' alt="" className='p-10'/>
                    </div>
                    <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl border border-[rgb(208, 208, 208)] p-10">
                        <form onSubmit={handleLogin} className="card-body" >
                            <h1 className="text-3xl text-center font-bold text-black">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base text-black font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base text-black font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center'>or Sign in With </p>
                        <div className='flex justify-center gap-3 mt-5 '>
                            <button className='btn btn-circle text-xl text-blue-900'><FaFacebookF /></button>
                            <button className='btn btn-circle text-xl  text-blue-800'><RiLinkedinFill /></button>
                            <button className='btn btn-circle text-xl'><FcGoogle /></button>
                        </div>
                        <label className="label my-5">
                            <p className="text-center w-full text-[#737373]">Have an account? <span className='text-orange-600 font-bold'><Link href='/signUp'>Sign In</Link></span></p >
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
import { FcGoogle } from "react-icons/fc";

export default page;