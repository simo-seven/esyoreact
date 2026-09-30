import ScrollToTopLink from "../reusable/ScrollToTopLink";

const HomeBiography = ({ title, bio }) => {
  const introParagraph = bio.find((p) => p.id === "1");
  const snippet = introParagraph
    ? introParagraph.body.split(" ").slice(0, 77).join(" ") + "..."
    : "";

  return (
    <section className="container-xxl py-5 bckblack" aria-label="About the Orchestra">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
              About Us
            </p>
            <h2 className="mb-4 text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              {title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify max-w-4xl">
              {snippet}
            </p>
            <div className="mt-6">
              <ScrollToTopLink
                to="/orchestra"
                className="btn btn-secondary py-3 px-6 rounded-full inline-block font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Our History
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBiography;
