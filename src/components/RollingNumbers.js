const RollingNumbers = ({ numbers }) => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {numbers.map((number) => (
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay={number.delay}
              key={number.id}
            >
              <h1 className="beCareful mb-2 text-5xl" data-toggle="counter-up">
                {number.value}
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
