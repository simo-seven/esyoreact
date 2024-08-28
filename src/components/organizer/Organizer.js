import { useState } from "react";
import OrganizerDescription from "./OrganizerDescription";
import data from "../../data/organizer.json";
import { Helmet } from "react-helmet-async";

const Organizer = () => {
  const content = data;
  const [language, setLanguage] = useState("en");
  const [filePath, setFilePath] = useState("/files/SGMEApplication.pdf");

  const handleEnglishClick = () => {
    setLanguage("en");
    setFilePath("/files/SGMEApplication.pdf");
  };
  const handleItalianClick = () => {
    setLanguage("it");
    setFilePath("/files/SchedaSocioSGME.pdf");
  };

  return (
    <>
      <Helmet>
        <title>Organizer | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Learn about Scuola per Giovani Musicisti Europei (SGME), promoting cultural dialogue and supporting young musicians through the ESYO Project."
        />
        <link rel="canonical" href="/organizer" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Organizer | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Learn about Scuola per Giovani Musicisti Europei (SGME), promoting cultural dialogue and supporting young musicians through the ESYO Project."
        />
        <meta property="og:url" content="https://esyo.eu/organizer" />
        <meta
          property="og:image"
          content="https://esyo.eu/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Organizer | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Learn about Scuola per Giovani Musicisti Europei (SGME), promoting cultural dialogue and supporting young musicians through the ESYO Project."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/logo.png"
        />
      </Helmet>

      <div className="container-xxl py-5 mb:p-0">
        <div className="container py-5 px-lg-5">
          <div
            className="animate__animated animate__fadeInUp hidden md:block"
            data-wow-delay="0.1s"
          >
            <h1 className="text-center mb-5 text-white text-4xl">
              Scuola per Giovani Musicisti Europei SGME
            </h1>
          </div>
          <div className="flex items-end mt-0">
            <div
              className="btn-group py-4"
              role="group"
              aria-label="Language Toggle"
            >
              <button
                type="button"
                className="btn beCareful languagebutton"
                onClick={() => handleEnglishClick()}
              >
                English
              </button>
              <button
                type="button"
                className="btn beCareful languagebutton"
                onClick={() => handleItalianClick()}
              >
                Italian
              </button>
            </div>
          </div>

          <OrganizerDescription
            content={content.filter((data) => data.lang === language)}
            filePath={filePath}
          />
        </div>
      </div>
    </>
  );
};

export default Organizer;
