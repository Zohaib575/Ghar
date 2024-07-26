import Link from 'next/link';
import React from 'react'


const sale = () => {
  return (
    <>
      {/* <!--Start Background Animation Body--> */}
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <!--End Background Animation Body--> */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand SALES  Flow.
              <strong className="font-extrabold text-red-700 sm:block">
                Increase Property Value.🏡
              </strong>
            </h1>

            <div className="mt-4 sm:text-xl/relaxed text-white">
              Welcome!😊 GHAR is a PAKISTAN Real Estate Property
              Business Website for Helping People to find more realastic Properties around their . <div className="font bold uppercase text-blue-400 ">If your facing any problem ib adding you property . Please contact with us . We are available 24X7</div>    
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/get-started" passHref>
                <button className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white  hover:bg-white hover:text-orange-500 hover:scale-100 duration-200 focus:outline-none  cursor-pointer shadow-lg active:bg-orange-500 sm:w-auto">
                  Get Started
                </button>
              </Link>
              <Link href="/Contact" passHref>
                <button className="block w-full rounded px-12 py-3 text-sm font-medium bg-white text-orange-500 hover:text-white hover:bg-orange-500 hover:scale-100 duration-200 shadow-lg focus:outline-none focus:ring active:text-red-500 sm:w-auto cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default sale
