import Biography from "./orchestra/HomeBiography";
import Maestro from "./conductor/Maestro";
import RollingNumbers from "./RollingNumbers";
import ComingSoon from "./ComingSoon";
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

const Home = () => {
  return (
    <>
      <Video />
      <Biography title="The ESYO Orchestra" bio={dataBio} />
      <RollingNumbers numbers={dataNumbers} />
      <Maestro bio={dataConductor}/>
      {/* <News news={dataNews} /> */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="container-fluid">
            <div className="row">
              <ComingSoon className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <PartnersCarousel sponsors={dataSponsors} />
      <HomeTestimonials testimonials={dataTestimonials} />
    </>
  );
};
export default Home;
