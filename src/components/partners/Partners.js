import SponsorCard from "./SponsorCard";
import SponsorSchools from "./SponsorSchools";
import dataMain from "../../data/partners.json";
import SEO from "../common/SEO";

const Partners = () => {
  const partners = dataMain;

  return (
    <>
      <SEO
        title="Partners & Supporters"
        description="Discover the public institutions, private foundations, corporate sponsors, and international network of music schools supporting the European Spirit of Youth Orchestra."
        keywords="ESYO partners, orchestra sponsors, European cultural sponsors, music school network"
        canonical="https://esyo.eu/partners"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
          <SponsorCard data={partners.main} title="Main Supporters" />
          <SponsorCard data={partners.partners} title="Partners" />
          <SponsorSchools
            data={partners.schools}
            title="International Network of Music Schools Partners of ESYO"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
