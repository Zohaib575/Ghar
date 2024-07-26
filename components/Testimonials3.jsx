
import React from 'react'


const Testimonials3 = () => {

  const people = [
    {
      name: "Clara Megan",
      avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
      testimony: "The GHAR website has been an absolute game-changer for finding the perfect home. Their user-friendly platform makes it so easy to explore various properties. Highly recommended!",
      twitterPseudo: "@claramegan"
    },
    {
      name: "Leo Turner",
      avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
      testimony: "Thanks to GHAR, I found my dream house in no time! The detailed listings and helpful features made the whole process a breeze. I couldn't be happier with my new home!",
      twitterPseudo: "@leoturner"
    },
    {
      name: "Keith Chambers",
      avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
      testimony: "GHAR's website offers an amazing selection of properties, and the search filters are incredibly precise. It saved me so much time and effort. I love my new place, all thanks to GHAR!",
      twitterPseudo: "@keithchambers"
    },
   
  ]
  const parters = [
    {
      name: "Amazon",
      picture: "#icon-monster-image",
    },
    {
      name: "Apple",
      picture: "#icon-monster-image",
    },
   
  ]

  return (
    <div className="relative mx-auto py-5 px-4 w-full max-w-7xl bg-gray-100 text-gray-700">
      <div className="flex flex-col items-center">

        {/* :TITLE CONTAINER */}
        <div className="mb-8 px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">Join thousands of happy clients</h2>
        </div>

        {/* :TESTIMONIALS CONTAINER */}
        <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
          <ul className="grid grid-cols-6 gap-5">
            {people.map(person => (
              <li key={person.twitterPseudo} className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white">
                {/* ::Card header */}
                <div className="flex items-center space-x-3">
                  {/* :::avatar */}
                  <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                    <img src={person.avatar} alt="" className="object-cover" />
                  </span>
                  <div className="text-left">
                    {/* :::name */}
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    {/* :::pseudo twitter */}
                    <p className="text-sm text-gray-400">{person.twitterPseudo}</p>
                  </div>
                </div>
                {/* ::Card body */}
                <div className="mt-4 flex text-sm">
                  {/* :::testimony */}
                  <p className="text-sm">
                    <span className="text-blue-400 font-semibold">@Zoahib Ahmad </span>
                    {person.testimony}
                  </p>
                </div>
              </li>
            ))
            }
          </ul>
        </div>

        {/* :PARTNER BRANDS */}
        <div className="mt-8 w-full">
          <h3 className="mb-3 flex justify-center items-center text-center text-lg text-gray-400 font-extrabold uppercase">
            <span className="mr-3 w-16 h-1 bg-gray-400" />
            They trusted Us
            <span className="ml-3 w-16 h-1 bg-gray-400" />
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center space-y-5 sm:space-y-0 space-x-6">
            {parters.map(brand => (
              <li key={brand.name} className="w-14 sm:w-16 opacity-40">
                <img src={brand.picture} alt="" className="object-cover" />
              </li>
            ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Testimonials3
