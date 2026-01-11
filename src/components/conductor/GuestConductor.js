// import Questions from "./Questions";
import { Helmet } from "react-helmet-async";

const GuestConductor = ({ bio, renderBody }) => {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Guest Conductor | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Meet Nenad Petković, Guest Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <link rel="canonical" href="https://esyo.eu/guestconductor" />

        {/* Open Graph — WhatsApp, iMessage, Facebook, LinkedIn */}
        <meta property="og:type" content="profile" />
        <meta
          property="og:site_name"
          content="European Spirit of Youth Orchestra"
        />
        <meta property="og:locale" content="en_US" />

        <meta
          property="og:title"
          content="Guest Conductor | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Meet Nenad Petković, Guest Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <meta property="og:url" content="https://esyo.eu/guestconductor" />

        {/* Image — CRITICAL for WhatsApp/iMessage */}
        <meta
          property="og:image"
          content="https://esyo.eu/img/guest_conductor.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://esyo.eu/img/guest_conductor.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Nenad Petković conducting the European Spirit of Youth Orchestra"
        />

        {/* Twitter / X (kept for completeness) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ESYO_Europe" />
        <meta name="twitter:creator" content="@ESYO_Europe" />
        <meta
          name="twitter:title"
          content="Guest Conductor | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Meet Nenad Petković, Guest Conductor of ESYO. Learn about his achievements, projects, and contributions to youth orchestras and cultural dialogue."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/img/guest_conductor.jpg"
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

export default GuestConductor;
