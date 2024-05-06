import Biography from "./components/Biography";
import Maestro from "./components/Maestro";
import RollingNumbers from "./components/RollingNumbers";
import ComingSoon from "./components/ComingSoon";
import dataNumbers from "./data/rollingNumbers.json";
import dataNews from "./data/news.json";
import News from "./components/News";
import dataSponsors from "./data/partners.json";
import PartnersCarousel from "./components/PartnersCarousel";
import HomeTestimonials from "./components/HomeTestimonials";
import dataTestimonials from "./data/TestimonialsHomepage.json";
import Video from "./components/Video";

const Home = ({formatDate}) => {
  const numbers = dataNumbers;
  const news = dataNews;
  const sponsors = dataSponsors;
  const testimonials = dataTestimonials;
  return (
    <>
      <Video />
      <Biography />
      <RollingNumbers numbers={numbers} />
      <Maestro />
      <News news={news} />
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
