import Biography from "./orchestra/HomeBiography";
import Maestro from "./conductor/Maestro";
import RollingNumbers from "./reusable/RollingNumbers";
import dataNumbers from "../data/rollingNumbers.json";
import dataNews from "../data/news.json";
import News from "./news/News";
import dataSponsors from "../data/partners.json";
import PartnersCarousel from "./PartnersCarousel";
import HomeTestimonials from "./HomeTestimonials";
import dataTestimonials from "../data/testimonials/homePage.json";
import dataBio from "../data/orchestraBio.json";
import dataConductor from "../data/conductorBio.json";
import Video from "./headers_footer/Video";
// import ComingSoon from "./ComingSoon";
import MobileConcerts from "./tours/MobileConcerts";
import DesktopConcerts from "./tours/DesktopConcerts";

import data from "../data/concerts/venues.json";
import { Helmet } from "react-helmet-async";

const Home = ({formatDate}) => {
  const concerts = data;
  console.log(dataConductor);

  return (
    <>
      <Helmet>
        <title>European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="The European Spirit of Youth Orchestra (ESYO) embodies the European youth's Spirit through music, showcasing a harmonious blend of diverse voices and cultures."
        />
        <meta
          name="keywords"
          content="orchestra, youth orchestra, europe, european orchestra, european youth orchestra"
        />
        <link rel="canonical" href="URL" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="The European Spirit of Youth Orchestra (ESYO) embodies the European youth's Spirit through music, showcasing a harmonious blend of diverse voices and cultures."
        />
        <meta property="og:url" content="https://esyo.eu/" />
        <meta
          property="og:image"
          content="https://esyo.eu/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="The European Spirit of Youth Orchestra (ESYO) embodies the European youth's Spirit through music, showcasing a harmonious blend of diverse voices and cultures."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/logo.png"
        />
      </Helmet>
      
      <Video />
      <Biography title="The ESYO Orchestra" bio={dataBio} />
      <RollingNumbers numbers={dataNumbers} />
      <Maestro bio={dataConductor} />
      <News news={dataNews} formatDate={formatDate} />
      {/*  Old conditional rendering (displaying Coming Soon if there were no concerts)
      {concerts?.length === 0 ? (
        <>
          <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
              <div className="container-fluid">
                <div className="row">
                  <ComingSoon />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="container-xxl newsletter wow fadeInUp paddingsxdxzero mt-0"
            data-wow-delay="0.1s"
          >
            <div className="container px-lg-5">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <h1 className="text-center text-white pt-8 mt-8 text-5xl">
                    What's On
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <MobileConcerts concerts={concerts} />
          <DesktopConcerts concerts={concerts} />
        </>
      )} */}
      {concerts?.length > 0 && (
        <>
          <div
            className="container-xxl newsletter wow fadeInUp paddingsxdxzero mt-0"
            data-wow-delay="0.1s"
          >
            <div className="container px-lg-5">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <h1 className="text-center text-white pt-8 mt-8 text-5xl">
                    What's On
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <MobileConcerts concerts={concerts} />
          <DesktopConcerts concerts={concerts} />
        </>
      )}

      <PartnersCarousel sponsors={dataSponsors} />
      <HomeTestimonials testimonials={dataTestimonials} />
    </>
  );
};
export default Home;
