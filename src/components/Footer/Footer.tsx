import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
    const [showError, setShowError] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
        setIsValidEmail(isValid);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidEmail) {
            setEmail('');
            setShowError(false); 
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        } else {
            setShowError(true);
            setShowSuccess(false);
            setTimeout(() => {
                setShowError(false);
            }, 3000);
        }
    };


    return (
        <footer className="py-10">
            <div className="container mx-auto px-4 font-poppins">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
                        <h1 className="text-2xl font-bold mb-10" >Funiro</h1>
                        <p className="text-gray">
                            420 University Drive Suite 200 Coral Gables, FL 33134 EUA
                        </p>
                        <div className="flex space-x-4 mt-16">
                            <a href="https://www.facebook.com/" target="_blank">
                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                                    <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/footer/facebook+1.png" alt="Facebook" className="w-4 h-4" />
                                </div>
                            </a>
                            <a href="https://instagram.com" target="_blank" >
                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                                    <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/footer/instagram+1.png" alt="Instagram" className="w-4 h-4" />
                                </div>
                            </a>
                            <a href="https://x.com/" target="_blank" >
                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                                    <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/footer/twitter+1.png" alt="Twitter" className="w-4 h-4" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" >
                                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                                    <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/footer/linkedin+1.png" alt="Linkedin" className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
                        <h2 className="text-xl font-semibold mb-10 text-gray" >Links</h2>
                        <ul className="space-y-8">
                            <li><a href="#" className="hover:text-primary">Home</a></li>
                            <li><a href="#" className="hover:text-primary">Shop</a></li>
                            <li><a href="#" className="hover:text-primary">About</a></li>
                            <li><a href="#" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
                        <h2 className="text-xl font-semibold mb-10 text-gray" >Help</h2>
                        <ul className="space-y-8">
                            <li><a href="#" className="hover:text-primary">Payment Options</a></li>
                            <li><a href="#" className="hover:text-primary">Returns</a></li>
                            <li><a href="#" className="hover:text-primary">Privacy Policies</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray">Newsletter</h2>
                        <form className="flex flex-wrap" onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                value={email}
                                onChange={handleEmailChange}
                                className={`w-full md:w-auto flex-grow px-4 py-2 mb-2 md:mb-0 border-b ${showError && !isValidEmail ? 'border-red-500' : 'border-black'} focus:outline-none`}
                            />
                            <button type="submit" className="px-4 py-2 border-b border-black md:ml-2 hover:text-primary">
                                SUBSCRIBE
                            </button>
                        </form>
                        {showError && !isValidEmail && <p className="text-red-500 mt-1">Invalid email</p>}
                        {showSuccess && isValidEmail && <p className="text-green-500 mt-1">You've signed up for our newsletter</p>}
                    </div>
                </div>
                <div className="border-t border-light-gray pt-4 mt-4 flex justify-start items-center">
                    <p>2023 Funiro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
