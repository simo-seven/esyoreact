import ScrollToTopLink from "../reusable/ScrollToTopLink";

const Maestro = ({ bio }) => {
  return (
    <div className="container-xxl py-5 wow fadeInUp bckblack">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary">Artistic Director</p>
            <h1 className="mb-5 text-white text-5xl">
              M<sup>o</sup> {bio.name}
            </h1>
            <p className="mb-4 text-white">
              {bio.body1.split(" ").slice(0, 38).join(" ") + "..."}
            </p>
            <ScrollToTopLink
              to="/artisticdirector"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Read More
            </ScrollToTopLink>
          </div>
          <div className="col-lg-6 hidden md:block">
            <img
              className="img-fluid wow zoomIn profile-image grayscale-to-color"
              data-wow-delay="0.5s"
              src={bio.image}
              alt="Maestro Igor Coretti Kuret"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maestro;
