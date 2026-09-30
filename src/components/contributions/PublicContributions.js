import { useState } from "react";
import data from "../../data/publicContributions.json";
import SelectData from "./SelectData";
import OutputData from "./OutputData";
import SEO from "../common/SEO";

const PublicContributions = ({ renderBody }) => {
  const [year, setYear] = useState("1");

  const getIdBody = (id) => {
    const item = data.find((item) => item.id === id);
    return item ? item.body : "No matching id found";
  };

  return (
    <>
      <SEO
        title="Public Contributions"
        description="Access official records and administrative transparency reports of public contributions received by Scuola per Giovani Musicisti Europei (SGME) for the ESYO project."
        keywords="ESYO public contributions, SGME transparency, administrative contributions Trieste"
        canonical="https://esyo.eu/publicontributions"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-5xl mx-auto">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-8">
            On this administrative transparency page you will find all public
            contributions received in recent years. To view the desired year,
            simply select it in the box below. For administrative reasons the
            text is given in Italian.
          </p>
          <div className="row justify-content-center">
            <SelectData data={data} setYear={setYear} />

            <OutputData
              renderBody={renderBody}
              getIdBody={getIdBody}
              year={year}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicContributions;
