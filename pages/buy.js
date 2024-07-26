import productData from "./api/buy";
import { BsBookmarkHeartFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import Link from "next/link";

const buy = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl m-10 font-bold  text-center">
          BUY PROPERTY 🚢
        </h1>
        <div className="grid m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productData.map((product) => (
            <Link
              href={`/rooms/${product.id}`}
              key={product.id}
              className="relative"
            >
              <div className="block hover:scale-105 duration-1000 hover:shadow-indigo-400 rounded-lg p-4 shadow-lg shadow-indigo-100">
                <div className="relative">
                  <img
                    alt="Home"
                    src={product.image}
                    className="h-56 w-full rounded-md object-cover"
                  />
                  <div className="text-lg absolute top-0 right-0 bg-gray-100 px-4 text-orange-500 rounded-full h-10 w-10 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-orange-300 hover:text-white transition duration-500 ease-in-out">
                    <BsSuitHeart />
                  </div>
                </div>

                <div className="mt-2">
                  <dl>
                    <div className="flex justify-between ">
                      <div>
                        <dt className="sr-only">Price</dt>
                        <dd className="text-sm text-gray-500">
                          {product.price}
                        </dd>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <div className=" text-orange-500 hover:text-gray-500 hover:animate-ping hover:duration-1000">
                          <ImEye />
                        </div>
                        <div className="text-gray-24">{product.viewCount}</div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="font-medium">{product.address}</dd>
                      </div>
                      <div className=" hover:bg-orange-300 hover:text-white  bg-gray-100 p-3 text-orange-500 rounded-full h-10 w-10 text-center hover:scale-150  hover:duration-1000 transition duration-500 ease-in-out">
                        <BsBookmarkHeartFill />
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Parking</p>

                        <p className="font-medium">{product.parking}</p>
                      </div>
                    </div>


                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4  text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Bedroom</p>

                        <p className="font-medium">{product.bedroom}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default buy;
