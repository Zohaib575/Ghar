import Link from "next/link";
import React from "react";

const Page4048 = () => {
  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* :TITLE */}
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-orange-500 font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            This page does not exist
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Sorry! We could not find the page you are looking for. Please check
            URL in address bar and try again.
          </p>
        </div>

        {/* :OPTION LINKS */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="/" passHref>
            <div className="px-5 py-2.5 rounded border border-transparent bg-orange-600 text-center text-base text-white font-medium hover:bg-orange-700">
              Get back to Homepage
            </div>
          </Link>
          <Link href="/Contact" passHref>
            <div className="px-5 py-2.5 rounded border-2 border-orange-400 bg-transparent text-center text-base text-orange-400 font-medium hover:border-orange-500 hover:text-orange-500">
              Contact Support
            </div>
          </Link>
        </div>

        {/* :ILLUSTRATION */}
        <img
          src="https://fancytailwind.com/static/under_construction-503cab99df4458de6d2801e7ee4fa400.svg"
          alt=""
          className="mt-10 max-h-72"
        />
      </div>
    </div>
  );
};

export default Page4048;
