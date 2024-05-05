import { Link } from "react-router-dom";

const Maestro = () => {
  return (
    <div
      className="container-xxl py-5 wow fadeInUp bckblack"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary">
              Artistic Director
            </p>
            <h1 className="mb-5 text-white text-5xl">
              M<sup>o</sup> Igor Coretti Kuret
            </h1>
            <p className="mb-4 text-white">
              Internationally esteemed violinist and conductor, Maestro Igor
              Coretti-Kuret is particularly appreciated for his ability to teach
              music and communicate with young musicians. He is the founder of
              ESYO, the European Spirit of Youth Orchestra, of which he now is
              Chief Conductor and Artistic Director.
            </p>
            <Link
              to="/artisticdirector"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Read More
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid wow zoomIn profile-image grayscale-to-color"
              data-wow-delay="0.5s"
              src="/img/portret.jpeg"
              alt="Maestro Igor Coretti Kuret"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maestro;
