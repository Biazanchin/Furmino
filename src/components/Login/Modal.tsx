import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../services/Firebase/FirebaseAuth";

interface ModalProps {
  onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
  const navigate = useNavigate();
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("User Info: ", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("User Info: ", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error during Facebook login: ", error);
    }
  };

  const handleEmailLogin = () => {
    setShowEmailLogin(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Info: ", userCredential.user);
      navigate("/");
    } catch (error: any) {
      console.error("Error during authentication: ", error);
      if (error.code === "auth/user-not-found") {
        try {
          const newUserCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("New user created: ", newUserCredential.user);
          navigate("/");
        } catch (createError) {
          console.error("Error creating user: ", createError);
        }
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
      role="dialog"
    >
      <div className="bg-white p-8 rounded shadow-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-2xl mb-4">Login</h2>
        {!showEmailLogin && (
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleGoogleLogin}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Acessar com Google
            </button>
            <button
              onClick={handleEmailLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Acessar com Email
            </button>
            <button
              onClick={handleFacebookLogin}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Acessar com Facebook
            </button>
          </div>
        )}
        {showEmailLogin && (
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Modal;
