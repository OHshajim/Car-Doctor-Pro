import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/service"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
    return (
        <div className="navbar  text-[#444444] container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links.map(link => <Link href={link.path} key={link.path}>{link.title}</Link>)
                        }
                    </ul>
                </div>
                <Link href='/' className="w-28 ">
                    <Image src="/logo.svg" alt="logo" width={107} height={87}/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links.map(link =>
                            <Link href={link.path} key={link.path} className="px-3">{link.title}</Link>
                        )
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4">
                <button className="text-2xl"><MdOutlineShoppingBag />
                </button>
                <button className="text-xl"><FaSearch/></button>
                <button className="btn btn-outline btn-primary">Appointment</button>
                </div>
            </div>
        </div>
    );
};
import { MdOutlineShoppingBag } from "react-icons/md";

export default Nav;