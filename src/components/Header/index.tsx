import { useState } from "react";
import { Link } from "react-router-dom";
import { ActiveLink } from "./ActiveLink";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="m-2">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            className="cursor-pointer h-8 mr-2"
                            src={"https://desafio3furniro.s3.us-east-2.amazonaws.com/header/logo.png"}
                            alt="Logo"
                        />
                    </Link>
                    <h1 className="text-xl font-montserrat font-bold">Furniro</h1>
                </div>
                <div className="flex-1 hidden lg:flex justify-center">
                    <nav>
                        <ul className="flex space-x-24 font-poppins">
                            <li>
                                <ActiveLink to="/">Home</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/shop">Shop</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/about">About</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/contact">Contact</ActiveLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden lg:flex">
                    <Link to="/login">
                        <img className="cursor-pointer h-6 mx-4" src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/usuario.png" alt="usuario" />
                    </Link>
                    <img className="cursor-pointer h-6 mx-4" src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/carrinho.png" alt="carrinho" />
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            stroke="black"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleMenu}></div>}
            <div className={`fixed top-0 right-0 h-full z-50 bg-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} w-3/5 lg:hidden`}>
                <button onClick={toggleMenu} className="absolute top-4 right-4">
                    <svg
                        className="w-6 h-6 text-black"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                <nav>
                    <ul className="flex flex-col mt-16 gap-4 ml-8 text-lg font-poppins">
                        <li>
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/shop">Shop</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/about">About</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/contact">Contact</ActiveLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex mt-8 ml-8">
                    <Link to="/login">
                        <img className="cursor-pointer h-6 mx-4" src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/usuario.png" alt="usuario" />
                    </Link>
                    <img className="cursor-pointer h-6" src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/carrinho.png" alt="carrinho" />
                </div>
            </div>
        </header>
    );
};

export default Header;
