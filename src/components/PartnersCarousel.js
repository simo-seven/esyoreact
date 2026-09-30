import ScrollToTopLink from "./reusable/ScrollToTopLink";

const PartnersCarousel = ({ sponsors, bcg }) => {
  const allSponsors = [...(sponsors.main || []), ...(sponsors.partners || [])];
  // Duplicate for seamless 50% infinite loop
  const marqueeItems = [...allSponsors, ...allSponsors];

  return (
    <section
      className={`container-xxl py-5 overflow-hidden bg-black bckblack ${bcg}`}
      aria-label="Partners and Supporters"
    >
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Partners<span></span>
            </p>
            <h2 className="text-center text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Partners and Supporters
            </h2>
          </div>
        </div>
      </div>

      <div className="partner-marquee relative w-full overflow-hidden py-4">
        {/* Subtle fade masks on left and right for elegant visual blending */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="partner-marquee-track flex items-center">
          {marqueeItems.map((sponsor, index) => (
            <div
              className="partner-slide flex-shrink-0 px-6 sm:px-8 py-3 flex items-center justify-center"
              key={`${sponsor.id}-${index}`}
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="max-h-12 sm:max-h-16 w-auto max-w-[160px] sm:max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container py-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <ScrollToTopLink
              to="/partners"
              className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-block hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Become our partner!
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
