import React, { useState } from "react";
import logo from "../images/logo.svg";
import open from "../images/icon-menu.svg"
import close from "../images/icon-menu-close.svg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex flex-row justify-between *:p-10">
                <div>
                    <img src={logo} alt="Company logo" />
                </div>
                <div className="flex-row gap-6 items-center hover:*:text-primary hidden lg:flex">
                    <a href="#" aria-current="page">Home</a>
                    <a href="#">New</a>
                    <a href="#">Popular</a>
                    <a href="#">Trending</a>
                    <a href="#">Categories</a>
                </div>
                <div className="lg:hidden">
                    <button
                        className="p-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
                        onClick={toggleMenu}
                    >
                        <img src={open} />
                    </button>

                    {isOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50">
                            <div className="absolute top-0 right-0">
                                <div className="fixed right-0 bg-off-white h-full w-3/4">
                                    <div className="p-6 space-y-4 flex flex-col hover:*:text-primary *:text-lg">
                                        <div className="flex w-full justify-end">
                                            <img src={close} onClick={toggleMenu} className="w-fit" />
                                        </div>
                                        <a href="#" aria-current="page">Home</a>
                                        <a href="#">New</a>
                                        <a href="#">Popular</a>
                                        <a href="#">Trending</a>
                                        <a href="#">Categories</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;