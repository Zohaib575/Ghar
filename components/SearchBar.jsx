import React, { useState } from 'react';
import Link from 'next/link';
import productData from '../pages/api/products';
import PageCards from './PageCards'; // Import the PageCards component

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setResults([]);
      return;
    }

    const filteredResults = productData.filter((product) =>
      Object.values(product).some(value =>
        value.toString().toLowerCase().includes(term)
      )
    );

    setResults(filteredResults);
  };

  return (
    <>
      <section className="mt-6 lg:mt-12 selection:bg-orange-500">
        <div className="bg-teal-500 text-white -skew-y-1">
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="mb-8">
                  <h2 className="text-3xl flex items-center text-center lg:text-4xl font-bold mb-3">
                    Looking for a Dream House?🏡
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Search the forum for Your Dream House 😊
                  </p>
                </div>

                <div className="mb-10">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                      <svg
                        className="w-6 h-6 rounded-full bg-orange-500 text-gray-300 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        ></path>
                      </svg>
                    </div>

                    <form action="#" method="GET">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search here Your Dream House, Location, Zip code"
                        className="p-4 pl-12 hover:border-b-4 duration-700 border-orange-500 hover:rounded-none text-gray-600 rounded-lg w-full outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </form>
                  </div>
                </div>

                <div className="text-lg">
                  <div>
                    Can't find what you're looking for?
                    <br className="sm:hidden" />
                    <Link href="/Contact" legacyBehavior>
                      <a className="border-b border-white pb-1">Create a new Identity</a>
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  {results.length > 0 ? (
                    results.map((product) => (
                      <div key={product.id} className="mb-4">
                        <Link  href={`/rooms/${product.id}`}  legacyBehavior>
                          <a className="text-white hover:underline">
                            {product.title} - {product.address}
                          </a>
                        </Link>
                      </div>
                    ))
                  ) : (
                    searchTerm && <p>No results found</p>
                  )}
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
