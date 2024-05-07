import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const RollingNumbers = ({ numbers }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5 // When 50% of the element is visible
  });

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" ref={ref}>
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {numbers.map((number) => (
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay={number.delay}
              key={number.id}
            >
              <h1 className="beCareful mb-2 text-4xl" data-toggle="counter-up">
                {inView ? (
                  <CountUp start={0} end={number.value} duration={2} />
                ) : (
                  0
                )}
              </h1>
              <p className="text-white mt-3">{number.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingNumbers;


//This is the component that counts up without waiting to be on the screen
// import React from 'react';
// import CountUp from 'react-countup';

// const RollingNumbers = ({ numbers }) => {
//   return (
//     <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//       <div className="container py-5 px-lg-5">
//         <div className="row g-4">
//           {numbers.map((number) => (
//             <div
//               className="col-md-6 col-lg-3 text-center wow fadeIn"
//               data-wow-delay={number.delay}
//               key={number.id}
//             >
//               <h1 className="beCareful mb-2 text-5xl" data-toggle="counter-up">
//                 <CountUp start={0} end={number.value} duration={2} />
//               </h1>
//               <p className="text-white mt-3">{number.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RollingNumbers;
