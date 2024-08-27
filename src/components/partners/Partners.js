import SponsorCard from "./SponsorCard";
import SponsorSchools from "./SponsorSchools";
import dataMain from "../../data/partners.json";
import { Helmet } from "react-helmet-async";

const Partners = () => {
  const partners = dataMain;

  return (
    <>
      <Helmet>
        <title>Partners - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the partners and supporters of the European Spirit of Youth Orchestra. Join us in celebrating those who help bring our musical vision to life."
        />
        <link rel="canonical" href="/partners" />
      </Helmet>
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <SponsorCard data={partners.main} title="main supporters" />
          <SponsorCard data={partners.partners} title="partners" />
          <SponsorSchools
            data={partners.schools}
            title="international network of music schools partners of ESYO"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
