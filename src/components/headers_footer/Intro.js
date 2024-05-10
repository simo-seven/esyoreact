const Intro = ({ title }) => {
  return (
    <div className="container-xxl position-relative p-0 grayscalepumped">
      <div className="container-xxl py-5 bg-primary hero-header intro-screen">
        <div className="container my-5 py-5 px-lg-5">
          <div className="g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="animated slideInDown pageTitle text-white lg:text-5xl md:text-3xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
