"use client";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
const page = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    const res = await axios.post(
      "http://localhost:3000/signUp/API",
      user
    );
    console.log(res);
    // SignUp(email, password)
    //     .then(result => {
    //         console.log(result.user);
    //         Swal.fire({
    //             title: "Congratulations",
    //             text: "Successfully Sign up !!!",
    //             icon: "success",
    //             confirmButtonText: 'ok'
    //         });
    //         navigate(location?.state ? location?.state : '/')
    //     })
    //     .catch(error => { console.log(error) })
  };
  return (
    <div className="bg-base-100">
      <div className="hero container mx-auto py-20">
        <div className="hero-content flex-col  w-full lg:flex-row items-center">
          <div className=" lg:text-left w-full lg:w-1/2 flex justify-center">
            <Image
              width={600}
              height={500}
              src="/images/login/login.svg"
              alt=""
              className="p-10"
            />
          </div>
          <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl border border-[rgb(208, 208, 208)] p-10">
            <form onSubmit={handleSignUp} className="card-body text-zinc-700">
              <h1 className="text-3xl text-center font-bold  text-black">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="text-base text-black font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base text-black font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base text-black font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center">or Sign in With </p>
            <div className="flex justify-center gap-3 mt-5 ">
              <button className="btn btn-circle text-xl text-blue-900">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle text-xl  text-blue-800">
                <RiLinkedinFill />
              </button>
              <button className="btn btn-circle text-xl">
                <FcGoogle />
              </button>
            </div>
            <label className="label my-5">
              <p className="text-center w-full text-[#737373]">
                Have an account?{" "}
                <span className="text-orange-600 font-bold">
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
