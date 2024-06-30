import Image from "next/image";
import { BsGoogle, BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer p-10 container mx-auto  text-[#E8E8E8]">
                <aside>
                    <Image width={80} height={65} src="/Group 2.png" alt="" />
                    <p className="text-[#E8E8E8] max-w-xs">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.</p>
                    <div className="flex gap-4 my-2">
                        <a className="btn btn-circle border-none bg-zinc-900 text-white text-2xl"> <BsGoogle /></a>
                        <a className="btn btn-circle border-none bg-zinc-900 text-white text-2xl"><FaFacebook /></a>
                        <a className="btn btn-circle border-none bg-zinc-900 text-white text-2xl"> <BsInstagram /></a>
                        <a className="btn btn-circle border-none bg-zinc-900 text-white text-3xl"> <LiaLinkedin /></a>
                    </div>
                </aside>
                <nav>
                    <h6 className=" text-white footer-title opacity-100">Services</h6>
                    <a className="link link-hover text-[#E8E8E8]">Branding</a>
                    <a className="link link-hover text-[#E8E8E8]">Design</a>
                    <a className="link link-hover text-[#E8E8E8]">Marketing</a>
                    <a className="link link-hover text-[#E8E8E8]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className=" text-white footer-title opacity-100">Company</h6>
                    <a className="link link-hover text-[#E8E8E8]">About us</a>
                    <a className="link link-hover text-[#E8E8E8]">Contact</a>
                    <a className="link link-hover text-[#E8E8E8]">Jobs</a>
                    <a className="link link-hover text-[#E8E8E8]">Press kit</a>
                </nav>
                <nav>
                    <h6 className=" text-white footer-title opacity-100">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;