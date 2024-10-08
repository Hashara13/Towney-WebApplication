import React from "react";
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative py-32 lg:py-36 bg-white">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
            Your Vision,<br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-purple-600 via-30% to-green-600">
              Our Team
            </span>{" "}
            Connecting with Talent.
          </h1>
          <p className="mt-8 text-gray-700">
            Join the Revolution in Film Production Networking Meet the Minds
            Behind the Magic of Collaborative Filmmaking.
          </p>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link to='/network'>
                <a
                  href="#"
                  class="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    class="h-8 w-8 text-emerald-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <div class="text-left">
                    <div class="-mt-1 font-sans text-sm font-semibold">
                      Search for Experts
                    </div>
                  </div>
                </a>
                </Link>

                <Link to='/create'>
               
                <a
                  href=""
                  class="w-full sm:w-auto flex bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    class="h-8 w-8 text-indigo-500 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="2.18"
                      ry="2.18"
                    />{" "}
                    <line x1="7" y1="2" x2="7" y2="22" />{" "}
                    <line x1="17" y1="2" x2="17" y2="22" />{" "}
                    <line x1="2" y1="12" x2="22" y2="12" />{" "}
                    <line x1="2" y1="7" x2="7" y2="7" />{" "}
                    <line x1="2" y1="17" x2="7" y2="17" />{" "}
                    <line x1="17" y1="17" x2="22" y2="17" />{" "}
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                  <div class="text-left">
                    <div class="-mt-1 font-sans text-sm font-semibold">
                      Register Your Skills
                    </div>
                  </div>
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://img.freepik.com/free-vector/isometric-cinematograph-illustration_1284-21494.jpg?t=st=1723569585~exp=1723570185~hmac=765a775c728a1a3fe8ac62e6678788d8b07b1a4be92f7058a05ca15e889db477"
            alt="Hero image"
            width="2350"
            height="2359"
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
