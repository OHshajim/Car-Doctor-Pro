import Image from "next/image";
import { BsGoogle, BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer p-10 container mx-auto  text-[#E8E8E8]">
                <aside>
                    <Image width={80} height={65} src="/logo.svg" alt="" />
                    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className="flex gap-4 text-white">
                        <a className="btn btn-circle border-none bg-gray-900 text-white text-2xl"> <BsGoogle /></a>
                        <a className="btn btn-circle border-none bg-gray-900 text-white text-2xl"><FaFacebook /></a>
                        <a className="btn btn-circle border-none bg-gray-900 text-white text-2xl"> <BsInstagram /></a>
                        <a className="btn btn-circle border-none bg-gray-900 text-white text-3xl"> <LiaLinkedin /></a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;