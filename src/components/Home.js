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
import LegatoBanner from "./LegatoBanner";

import data from "../data/concerts/venues.json";
import SEO from "./common/SEO";

const Home = ({formatDate}) => {
  const concerts = data;

  return (
    <>
      <SEO
        title="European Spirit of Youth Orchestra"
        description="The European Spirit of Youth Orchestra (ESYO) embodies the European youth's spirit through music, showcasing a harmonious blend of diverse voices and cultures."
        keywords="orchestra, youth orchestra, europe, european orchestra, european youth orchestra, classical music, Igor Coretti Kuret"
        canonical="https://esyo.eu/"
        ogType="website"
        ogImage="https://esyo.eu/logo.png"
      />
      
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
            className="container-xxl newsletter wow fadeInUp paddingsxdxzero mt-0 bckblack"
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
          <MobileConcerts concerts={concerts} bcg={"bckblack"} />
          <DesktopConcerts concerts={concerts} bcg={"bckblack"}/>
        </>
      )}
      <LegatoBanner />
      {/* if no concerts are displayed: first partners then testimonials */}
      <HomeTestimonials testimonials={dataTestimonials} bcg={""} />
      <PartnersCarousel sponsors={dataSponsors} bcg={"bckblack"} />
    </>
  );
};
export default Home;
