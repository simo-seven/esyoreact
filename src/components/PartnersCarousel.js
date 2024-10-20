import ScrollToTopLink from "./reusable/ScrollToTopLink";

const PartnersCarousel = ({ sponsors }) => {
  return (
    <div
      className="container-xxl newsletter py-5 wow fadeInUp paddingsxdxzero mt-0"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            {/* <p className="section-title text-secondary justify-content-center text-1xl">
              Partners
            </p> */}
            <h1 className="text-center text-white mb-4 text-5xl">
              Our Partners<br/> and Supporters
            </h1>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {/* <!-- LE FOTO DEVONO ESSERE 500px x 200px, altrimenti sono sgranate --> */}
          {[...sponsors.main, ...sponsors.partners].map((sponsor) => (
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
            <ScrollToTopLink
              to="/partners"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Become our partner!
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
