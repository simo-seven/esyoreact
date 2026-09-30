import { useState } from "react";
import OrganizerDescription from "./OrganizerDescription";
import data from "../../data/organizer.json";
import SEO from "../common/SEO";

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
      <SEO
        title="Organizer - SGME"
        description="Learn about Scuola per Giovani Musicisti Europei (SGME), the non-profit cultural association promoting European musical pedagogy and organizing the ESYO project since 1994."
        keywords="SGME, Scuola per Giovani Musicisti Europei, ESYO organizer, music association Trieste"
        canonical="https://esyo.eu/organizer"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-5xl mx-auto">
          <div className="animate__animated animate__fadeInUp text-center mb-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
              Scuola per Giovani Musicisti Europei SGME
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Cultural Association APS &bull; Trieste, Italy
            </p>
          </div>

          <div className="flex justify-center sm:justify-start items-center my-6">
            <div
              className="inline-flex p-1 bg-black/40 rounded-full border border-white/10"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                className={`py-2 px-5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  language === "en"
                    ? "bg-[#f68642] text-black shadow-md font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onClick={handleEnglishClick}
              >
                English
              </button>
              <button
                type="button"
                className={`py-2 px-5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  language === "it"
                    ? "bg-[#f68642] text-black shadow-md font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onClick={handleItalianClick}
              >
                Italiano
              </button>
            </div>
          </div>

          <OrganizerDescription
            content={content.filter((item) => item.lang === language)}
            filePath={filePath}
          />
        </div>
      </div>
    </>
  );
};

export default Organizer;
