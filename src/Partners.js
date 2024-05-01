import SponsorCard from "./SponsorCard";
import SponsorSchools from "./SponsorSchools";
import dataMain from "./data/sponsormain.json";
import dataPartner from "./data/sponsorpartner.json";
import dataSchool from "./data/sponsorschools.json";

const Partners = () => {
  const mainsupporters = dataMain;
  const partners = dataPartner;
  const schools = dataSchool;
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <SponsorCard data={mainsupporters} title="main supporters" />
        <SponsorCard data={partners} title="partners" />
        <SponsorSchools
          schools={schools}
          title="international network of music schools partners of ESYO"
        />
      </div>
    </div>
  );
};

export default Partners;
