import React, { useRef } from "react";


const CrewCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; 
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      id="team"
      className="section relative pt-2 pb-0 md:pt-0 bg-white dark:bg-gray-800 mt-[-20px]"
      style={{ position: "relative" }}
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-1">
          <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-800">
            <span className="font-dark">Explore Our</span> Crew
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
        </header>
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth whitespace-nowrap"
            style={{
              paddingBottom: "1rem",
              overflow: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex space-x-4">
              {[
                {
                  name: "Producers",
                  role: "Producers",
                  imgSrc:
                    "https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png",
                  socials: [
                    { platform: "Twitter", href: "#" },
                    { platform: "Facebook", href: "#" },
                    { platform: "Instagram", href: "#" },
                    { platform: "Linkedin", href: "#" },
                  ],
                },
                {
                  name: "Camera Crew",
                  role:"Producers",
                  imgSrc:
                    "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
                },
                {
                  name: "Sound Engineers",
                  role:"Producers",
                  imgSrc:
                    "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
                },
                {
                  name: "Costume Designer",
                  role: "Producers",
                  imgSrc:
                    "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
                },
                {
                  name: "VFX Supervisor",
                  role: "Producers",
                  imgSrc:
                    "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
                },
              ].map(({ name, role, imgSrc }, index) => (
                <div
                  key={index}
                 className="inline-block flex-shrink-0 max-w-full px-2 py-2 w-2/3 sm:w-1/8 md:w-1/20 lg:w-1/4 xl:px-4"
                >
                  <div
                    className="relative overflow-hidden shadow-xl border-4 border-purple-700 rounded-xl  pt-5 bg-gray-300 dark:bg-purple-700 mb-12 hover-grayscale-0 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`${0.1 * index}s`}
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: `${0.1 * index}s`,
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="relative overflow-hidden px-6">
                      <img
                        src={imgSrc}
                        className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                        alt={name}
                      />
                    </div>
                    <div className="pt-6 text-center">
                      {/* <p className="text-lg leading-normal font-bold mb-1">
                        {name}
                      </p> */}
                      <p className=" text-2xl leading-relaxed text-gray-100 ">
                        {name}
                      </p>
                      <div className="mt-2 mb-5 space-x-2"></div>
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
            
          </div>
          <div class="flex justify-between w-12 mx-auto pb-2">
                <button
                  id="sButton1"
                  onClick={() => scroll("left")}
                  class="bg-gray-400 rounded-full w-4 pb-2 "
                ></button>
                <button
                  id="sButton2"
                  onClick={() => scroll("right")}
                  class="bg-purple-400 rounded-full w-4 p-2"
                ></button>
                
              </div>
        </div>
      </div>
    </div>
  );
};

export default CrewCategories;
