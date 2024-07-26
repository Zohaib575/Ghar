import Link from "next/link";
import React from "react";

const Footer1 = () => {
  return (
    <footer className="w-full py-5 sm:py-10 px-4 bg-gray-800">
      {" "}
      {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          {/* ::Site name */}
          <h1 className="font-title text-4xl text-center font-semibold mt-auto">
            SOCIAL SERVICES
          </h1>
          {/* ::Social & copyright */}
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto hover:text-orange-500">
              {/* Facebook */}
              <Link href="https://www.linkedin.com/in/zohaibahmaddev/" passHref>
                <div className="text-orange-500 hover:bg-orange-500 hover:text-white p-2 rounded-full text-center ">
                  <span className="sr-only">Facebook</span>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </div>
              </Link>
              {/* Twitter */}
              <Link href="https://www.linkedin.com/in/zohaibahmaddev/" passHref>
                <div className="ml-3 text-orange-500 hover:bg-orange-500 hover:text-white p-2 rounded-full text-center">
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </div>
              </Link>
              {/* Instagram */}
              <Link href="https://www.linkedin.com/in/zohaibahmaddev/" passHref>
                <div className="ml-3 text-orange-500 hover:bg-orange-500 hover:text-white p-2 rounded-full text-center">
                  <span className="sr-only">Instagram</span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </div>
              </Link>
              {/* Linkedin */}
              <Link href="https://www.linkedin.com/in/zohaibahmaddev/" passHref>
                <div className="ml-3 text-orange-500 hover:bg-orange-500 hover:text-white p-2 rounded-full text-center">
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </div>
              </Link>
            </span>
            {/* :::Copyright */}
            <span className="py-4 text-xs">
              &copy;2023, GHAR Rights Reserved.
            </span>
          </div>
          {/* ::Mobile separator line */}
          <span
            className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2"
            aria-hidden="true"
          />
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-500 font-bold tracking-wide">
              GHAR
            </h3>
            <nav className="flex justify-around md:flex-col overflow-hidden  font-medium list-none ">
              <Link href="/" passHref>
                <li>
                  <div className="hover:text-orange-500  hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200 ">
                    HOME
                  </div>
                </li>
              </Link>

              <Link href="/rent" passHref>
                <li>
                  <div className="hover:text-orange-500 hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200">
                    RENT
                  </div>
                </li>
              </Link>
              <Link href="/buy" passHref>
                <li>
                  <div className="hover:text-orange-500 hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200">
                    BUY
                  </div>
                </li>
              </Link>
              <Link href="/sale" passHref>
                <li>
                  <div className="hover:text-orange-500 hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200">
                    SALE
                  </div>
                </li>
              </Link>
              <Link href="/about" passHref>
                <li>
                  <div className="hover:text-orange-500 hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200">
                    ABOUT US
                  </div>
                </li>
              </Link>
              <Link href="/Contact" passHref>
                <li>
                  <div className="hover:text-orange-500 hover:border-l-2 pl-2 pr-1  border-orange-500 duration-1000 delay-200">
                    CONTACT US
                  </div>
                </li>
              </Link>
            </nav>
          </div>
          {/* ::Address */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              Address
            </h3>
            <div className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">
              PNY STUDENTS , ARFA TOWER LAHORE , FLOOR 14
            </div>
          </div>
          {/* ::Email */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              GHAR REAL ESTATE CONTACT EMAIL
            </h3>
            <div className="inline-flex justify-center sm:justify-start text-sm text-orange-500 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <Link href="allahdita9280836@gmail.com" passHref>
                <div className="cursor-pointer" >allahdita9...@gmail.com</div>
              </Link>
            </div>
          </div>
          {/* ::Phone */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">
              Phone contact
            </h3>
            <div className="inline-flex justify-center sm:justify-start text-sm text-orange-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+92 323 ...94</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
