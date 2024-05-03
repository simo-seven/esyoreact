import { Link } from "react-router-dom";

const PartnersCarousel = ({ sponsors }) => {
  return (
    <div
      className="container-xxl newsletter py-5 wow fadeInUp bckblack paddingsxdxzero"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-title text-white justify-content-center">
              Partners
            </p>
            <h1 className="text-center text-white mb-4">
              The European Spirith of Youth Orchestra is supported by
            </h1>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {/* <!-- LE FOTO DEVONO ESSERE 500px x 200px, altrimenti sono sgranate --> */}
          {sponsors.map((sponsor) => (
            <div className="slide" key={sponsor.id}>
              <img
                src={sponsor.src}
                height="100"
                width="250"
                alt={sponsor.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <Link
              to="/partners"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Become our partner!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
