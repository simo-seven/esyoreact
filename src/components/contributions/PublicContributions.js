import { useState } from "react";
import data from "../../data/publicContributions.json";
import SelectData from "./SelectData";
import OutputData from "./OutputData";
import { Helmet } from "react-helmet-async";

const PublicContributions = ({ renderBody }) => {
  const [year, setYear] = useState("1");

  const getIdBody = (id) => {
    const item = data.find((item) => item.id === id);
    return item ? item.body : "No matching id found";
  };

  return (
    <>
      <Helmet>
        <title>Public Contributions - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Access detailed records of public contributions to ESYO from recent years. Select a year to view, with content available in Italian for administrative purposes."
        />
        <link rel="canonical" href="/publicontributions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Public Contributions - European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Access detailed records of public contributions to ESYO from recent years. Select a year to view, with content available in Italian for administrative purposes."
        />
        <meta property="og:url" content="https://esyo.eu/publicontributions" />
        <meta
          property="og:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Public Contributions - European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Access detailed records of public contributions to ESYO from recent years. Select a year to view, with content available in Italian for administrative purposes."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <p className="lg:text-justify">
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
