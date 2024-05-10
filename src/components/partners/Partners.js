import SponsorCard from "./SponsorCard";
import SponsorSchools from "./SponsorSchools";
import dataMain from "../../data/partners.json";

const Partners = () => {
  const partners = dataMain;

  return (
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
  );
};

export default Partners;
