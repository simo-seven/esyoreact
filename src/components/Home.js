import Biography from "./orchestra/HomeBiography";
import Maestro from "./conductor/Maestro";
import RollingNumbers from "./RollingNumbers";
import dataNumbers from "../data/rollingNumbers.json";
// import dataNews from "../data/news.json";
// import News from "./News";
import dataSponsors from "../data/partners.json";
import PartnersCarousel from "./PartnersCarousel";
import HomeTestimonials from "./HomeTestimonials";
import dataTestimonials from "../data/testimonials/homePage.json";
import dataBio from "../data/orchestraBio.json";
import dataConductor from "../data/conductorBio.json";
import Video from "./headers_footer/Video";
import ComingSoon from "./ComingSoon";
import MobileConcerts from "./tours/MobileConcerts";
import DesktopConcerts from "./tours/DesktopConcerts";

import data from "../data/concerts/venues.json";

const Home = () => {
  const concerts = data;

  return (
    <>
      <Video />
      <Biography title="The ESYO Orchestra" bio={dataBio} />
      <RollingNumbers numbers={dataNumbers} />
      <Maestro bio={dataConductor} />
      {/* <News news={dataNews} /> */}
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
      )}
      <PartnersCarousel sponsors={dataSponsors} />
      <HomeTestimonials testimonials={dataTestimonials} />
    </>
  );
};
export default Home;
