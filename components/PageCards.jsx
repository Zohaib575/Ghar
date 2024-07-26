import Link from "next/link";
import React from "react";

const PageCards = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-300 p-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-orange-500 underline text-3xl font-medium">
            Our Services
          </div>
          <div className="flex flex-col md:flex-row  max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full duration-700  hover:scale-110 cursor-pointer m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img src="Buy.png" alt="" className="h-52 w-52" />
                    <div className="text-orange-500 font-bold text-4xl">
                      BUY HOUSE
                    </div>
                    <div className="text-stone-600 font-medium m-2">
                      Find your place with an immersive photo experience and the
                      most listings, including things you won’t find anywhere
                      else.
                    </div>
                    <Link href="/buy" passHref>
                      <div className="w-full px-4 py-2 bg-white border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white   duration-700 delay-300 hover:scale-110">
                        <button>BUY HOUSE</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex duration-700  hover:scale-110 cursor-pointer justify-center bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img src="Sale.png" alt="" className="h-52 w-52" />
                    <div className="text-orange-500 font-bold text-4xl">
                      SELL A HOUSE
                    </div>
                    <div className="text-stone-600 font-medium m-2">
                      No matter what path you take to sell your home, we can
                      help you navigate a successful sale.
                    </div>
                    <Link href="/sale" passHref>
                      <div className="w-full px-4 py-2 bg-white border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white   duration-700 delay-300 hover:scale-110">
                        <button>SELL HOUSE</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex duration-700  hover:scale-110 justify-center cursor-pointer bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img src="Rant.png" alt="" className="h-52 w-52 " />
                    <div className="text-orange-500 font-bold text-4xl">
                      RENT A HOUSE
                    </div>
                    <div className="text-stone-600 font-medium m-2">
                      TWe’re creating a seamless online experience – from
                      shopping on the largest rental network, to applying, to
                      paying rent.
                    </div>
                    <Link href="/rent" passHref>
                      <div className="w-full px-4 py-2 bg-white text-orange-500 border-2 border-orange-500 font-bold hover:bg-orange-500 hover:text-white   duration-700 delay-300 hover:scale-110">
                        <button>RENT HOUSE</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCards;
