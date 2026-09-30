import SEO from "../common/SEO";

const GuestConductor = ({ bio, renderBody }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": bio.name,
    "jobTitle": bio.role || "Guest Conductor",
    "worksFor": {
      "@type": "Organization",
      "name": "European Spirit of Youth Orchestra",
      "url": "https://esyo.eu"
    },
    "image": "https://esyo.eu/img/guest_conductor.jpg",
    "sameAs": ["https://esyo.eu/guestconductor"]
  };

  return (
    <>
      <SEO
        title="Guest Conductor"
        description={`Meet ${bio.name}, Guest Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue.`}
        keywords="Nenad Petković, guest conductor, ESYO conductor, European Spirit of Youth Orchestra"
        canonical="https://esyo.eu/guestconductor"
        ogType="profile"
        ogImage="/img/guest_conductor.jpg"
        ogImageAlt={`Maestro ${bio.name}`}
        schema={schema}
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-5xl mx-auto">
          <div className="animate__animated animate__fadeInUp text-center mb-8">
            <p className="text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
              {bio.role}
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              M<sup>o</sup> {bio.name}
            </h1>
          </div>

          <div className="row g-5 align-items-center mb-8">
            <div className="col-12 col-md-5 d-flex justify-content-center">
              <div className="relative group max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f68642] to-amber-600 opacity-30 group-hover:opacity-60 blur-md transition duration-500"></div>
                <img
                  src={bio.image}
                  alt={`Maestro ${bio.name}`}
                  className="relative rounded-full aspect-square object-cover border-2 border-[#f68642]/50 shadow-2xl grayscale-to-color transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-12 col-md-7 text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              {renderBody(bio.body1)}
            </div>
          </div>

          {bio.body2 && (
            <div className="pt-6 border-t border-white/10 text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              {renderBody(bio.body2)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GuestConductor;
