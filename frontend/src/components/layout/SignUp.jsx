import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import draperImage from "../../assets/images/logos/mmm.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password,username)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="bg-white-100 flex justify-center items-center">
        <div className="lg:max-w-2xl lg:w-4/12">
          <img src={draperImage} alt="cover" className="btn-" />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Create an Account</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
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
                value={password}
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
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-gray-900 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-3 text-center">
            <button
              className="bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-4 w-full flex items-center justify-center hover:bg-gray-200"
              onClick={signInWithGoogle}
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              SignUp with Google
            </button>
          </div>
          <div className="mt-6 text-blue-500 text-center">
            <label htmlFor="remember" className="text-gray-600 ml-2 pr-2">
              Already Registered?
            </label>
            <Link to="/login" className="hover:underline">
              Sign In Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
