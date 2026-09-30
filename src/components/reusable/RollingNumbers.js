import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const RollingNumbers = ({ numbers }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      className="container-xxl py-12 sm:py-16 bg-black"
      aria-label="ESYO in numbers"
      ref={ref}
    >
      <div className="container px-4 sm:px-lg-5">
        <div className="row g-6 lg:g-0 justify-content-center">
          {numbers.map((number, idx) => (
            <div
              className={`col-6 col-md-6 col-lg-3 text-center px-4 py-4 ${
                idx < numbers.length - 1 ? "lg:border-r lg:border-white/15" : ""
              }`}
              key={number.id}
            >
              <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                <span className="beCareful text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans block mb-2">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={number.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  {number.suffix || ""}
                </span>
                <div className="w-8 h-0.5 bg-[#f68642]/60 mb-3 rounded-full"></div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium tracking-wide max-w-[200px] mx-auto m-0 leading-snug">
                  {number.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RollingNumbers;
