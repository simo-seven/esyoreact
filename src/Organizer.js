import { useState } from "react";
import OrganizerDescription from "./components/OrganizerDescription";
import data from "./data/organizer.json";

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
  );
};

export default Organizer;
