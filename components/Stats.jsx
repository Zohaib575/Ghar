
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default () => {
  const Stats = [
    {
      data: 35000,
      title: "Customers",
    },
    {
      data: 10000,
      title: "Properties",
    },
    {
      data: 40,
      title: "Countries",
    },
    {
      data: 30000000,
      title: "Total revenue",
    },
  ];

  const statsRefs = Stats.map(() => useRef(null));

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Our customers are always happy
          </h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {Stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center px-12 md:px-16"
                ref={statsRefs[idx]}
              >
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      <h4 className="text-4xl text-orange-500 font-semibold">
                        <CountUp
                          start={isVisible ? 0 : null}
                          end={isVisible ? item.data : null}
                          duration={2}
                        />
                      </h4>
                      <p className="mt-3 font-medium">{item.title}</p>
                    </div>
                  )}
                </VisibilitySensor>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
