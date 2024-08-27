import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import {
  subscribeEmailError,
  subscribeEmailSuccess,
} from "../../redux/Actions/userActions";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userReducer);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    setIsValidEmail(isValid);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail) {
      dispatch(subscribeEmailSuccess(email));
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      setEmail("");
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } else {
      dispatch(subscribeEmailError());
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (userState.subscriptionSuccess) {
      setEmail("");
    }
  }, [userState]);

  return (
    <footer className="py-10 border-t-2 border-light-gray">
      <div className="container mx-auto px-4 font-poppins">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6">
            <h1 className="text-2xl font-bold mb-10">Funiro</h1>
            <p className="text-gray">
              420 University Drive Suite 200 Coral Gables, FL 33134 EUA
            </p>
            <div className="flex space-x-4 mt-16">
              <a href="https://www.facebook.com/" target="_blank">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src="/facebook-footer.png"
                    alt="Facebook"
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src="/instagram-footer.png"
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <a href="https://x.com/" target="_blank">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src="/twitter-footer.png"
                    alt="Twitter"
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src="/linkedin-footer.png"
                    alt="Linkedin"
                    className="w-4 h-4"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
            <h2 className="text-xl font-semibold mb-10 text-gray">Links</h2>
            <ul className="space-y-8">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-primary">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
            <h2 className="text-xl font-semibold mb-10 text-gray">Help</h2>
            <ul className="space-y-8">
              <li>
                <a href="/payment" className="hover:text-primary">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-primary">
                  Returns
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:text-primary">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-xl font-semibold mb-6 text-gray">Newsletter</h2>
            <form className="flex items-center" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-2 mb-2 md:mb-0 border-b ${
                  showErrorMessage && !isValidEmail
                    ? "border-red-500"
                    : "border-black"
                } focus:outline-none`}
              />
              <button
                type="submit"
                className={`md:px-4 md:py-2 py-1 border-b border-black hover:text-primary md:ml-2 md:mt-0`}
              >
                SUBSCRIBE
              </button>
            </form>
            {showErrorMessage && !isValidEmail && (
              <p className="text-red-500 mt-1">Invalid email</p>
            )}
            {showSuccessMessage && isValidEmail && (
              <p className="text-green-500 mt-1">
                You've signed up for our newsletter
              </p>
            )}
          </div>
        </div>
        <div className="border-t border-light-gray pt-4 mt-4 flex justify-start items-center">
          <p>2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
