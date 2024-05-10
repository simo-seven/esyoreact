import Biography from "./Biography";
import Maestro from "./Maestro";
import RollingNumbers from "./RollingNumbers";
import ComingSoon from "./ComingSoon";
import dataNumbers from "../data/rollingNumbers.json";
// import dataNews from "./data/news.json";
// import News from "./components/News";
import dataSponsors from "../data/partners.json";
import PartnersCarousel from "./PartnersCarousel";
import HomeTestimonials from "./HomeTestimonials";
import dataTestimonials from "../data/testimonials/homePage.json";
import Video from "./Video";

const Home = ({formatDate}) => {
  const numbers = dataNumbers;
  // const news = dataNews;
  const sponsors = dataSponsors;
  const testimonials = dataTestimonials;
  return (
    <>
      <Video />
      <Biography />
      <RollingNumbers numbers={numbers} />
      <Maestro />
      {/* <News news={news} /> */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="container-fluid">
            <div className="row">
              <ComingSoon className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <PartnersCarousel sponsors={sponsors} />
      <HomeTestimonials testimonials={testimonials} />
    </>
  );
};
export default Home;
