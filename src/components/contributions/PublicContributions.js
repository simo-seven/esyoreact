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

  const getYearLabel = (id) => {
    const item = data.find((item) => item.id === id);
    return item ? item.year : "";
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

      <section className="container-xxl py-5" aria-label="Public Contributions">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto space-y-6">
          <p className="text-gray-300 text-base leading-relaxed text-justify mb-2">
            On this administrative transparency page you will find official records of all public
            contributions received in recent years. To view the desired year, simply select it below.
            For administrative and legal compliance in Italy, records are published in Italian.
          </p>

          <SelectData data={data} year={year} setYear={setYear} />

          <div className="pt-6 border-t border-white/10">
            <OutputData
              renderBody={renderBody}
              getIdBody={getIdBody}
              year={year}
              yearLabel={getYearLabel(year)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicContributions;
