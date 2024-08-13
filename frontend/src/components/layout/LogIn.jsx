import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-white-100 flex justify-center items-center">
      <div className="lg:max-w-2xl lg:w-4/12">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt="cover" />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={onLogin}> {/* Prevent default form submission */}
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-gray-600">
              Username or Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
            <Link to="#" className="hover:underline ml-20">
              Forget Password
            </Link>
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-gray-900 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <button
            className="bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-4 w-full flex items-center justify-center hover:bg-gray-200"
            onClick={signInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Login with Google
          </button>
        </div>
        <div className="mt-6 text-blue-500 text-center">
          <label htmlFor="remember" className="text-gray-600 ml-2 pr-2">
            Don't have an account?
          </label>
          <Link to="/register" className="hover:underline">
            Sign up Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
