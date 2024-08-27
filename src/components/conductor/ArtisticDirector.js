// import Questions from "./Questions";
import { Helmet } from "react-helmet-async";

const ArtisticDirector = ({ bio, renderBody }) => {
  return (
    <>
      <Helmet>
        <title>Artistic Director - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Meet Igor Coretti Kuret, Principal Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <link rel="canonical" href="/artisticdirector" />

        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Artistic Director - European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Meet Igor Coretti Kuret, Principal Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <meta property="og:url" content="https://esyo.eu/artisticdirector" />
        <meta
          property="og:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Artistic Director - European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Meet Igor Coretti Kuret, Principal Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div
            className="animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-secondary text-center text-uppercase">
              {bio.role}
            </p>
            <h1 className="text-center mb-5 text-white text-4xl">
              M<sup>o</sup> {bio.name}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-4">
            <div className="md:w-1/2 mx-auto">
              <img
                src={bio.image}
                alt={bio.name}
                className="profile-image grayscale-to-color"
              />
            </div>
            <div className="col-md-6 text-justify hidden md:block">
              {renderBody(bio.body1)}
              {/* <Questions bio={bio} min={0} max={3} /> */}
            </div>
          </div>
          {/* <div className="col text-justify hidden md:block">
          <Questions bio={bio} min={2} max={7} />
        </div> */}
          <div className="row mt-4 py-4 text-justify block md:hidden">
            {renderBody(bio.body1)}
          </div>
          <div className="row mt-4 py-4 text-justify">
            {renderBody(bio.body2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtisticDirector;
