const Intro = ({ title }) => {
  return (
    <div className="container-xxl position-relative p-0 grayscalepumped">
      <div
        className="container-xxl py-5 bg-primary hero-header intro-screen"
        style={{ backgroundImage: "url('/img/BUCigor.jpeg')" }}
      >
        <div className="container my-5 py-5 px-lg-5">
          <div className="g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="animate__animated animate__fadeInDown pageTitle text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
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
