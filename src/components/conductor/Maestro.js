import ScrollToTopLink from "../reusable/ScrollToTopLink";

const Maestro = ({ bio }) => {
  return (
    <section className="container-xxl py-5 bckblack" aria-label="Artistic Director">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="row g-5 align-items-center flex-col-reverse md:flex-row">
          <div className="col-12 col-md-6 col-lg-7">
            <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
              Artistic Director
            </p>
            <h2 className="mb-4 text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              M<sup>o</sup> {bio.name}
            </h2>
            <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              {bio.body1.split(" ").slice(0, 42).join(" ") + "..."}
            </p>
            <div>
              <ScrollToTopLink
                to="/artisticdirector"
                className="btn btn-secondary py-3 px-6 rounded-full inline-block font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Read Full Biography
              </ScrollToTopLink>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f68642] to-amber-600 opacity-30 group-hover:opacity-60 blur-md transition duration-500"></div>
              <img
                className="relative rounded-full aspect-square object-cover border-2 border-[#f68642]/50 shadow-2xl grayscale-to-color transition-all duration-500"
                src={bio.image}
                alt={`Maestro ${bio.name}`}
                loading="lazy"
                width="360"
                height="360"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maestro;
