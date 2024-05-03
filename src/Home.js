import Biography from "./Biography";
import Maestro from "./Maestro";
import RollingNumbers from "./RollingNumbers";
import ComingSoon from "./ComingSoon";
import dataNumbers from "./data/rollingNumbers.json";
import dataNews from "./data/news.json";
import News from "./News";
import dataSponsors from "./data/sponsormain.json";
import PartnersCarousel from "./PartnersCarousel";

const Home = () => {
  const numbers = dataNumbers;
  const news = dataNews;
  const sponsors = dataSponsors;
  return (
    <>
      <Biography />
      <RollingNumbers numbers={numbers} />
      <Maestro />
      <News news={news}/>
      <div class="container-xxl py-5">
        <div class="container py-5 px-lg-5">
          <div class="container-fluid">
            <div class="row">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
      <PartnersCarousel sponsors={sponsors} />
    </>
  );
};
export default Home;
