import AuditionsCard from "./AuditionsCard";
import AuditionsDownloadButtons from "./AuditionsDownloadButtons";
import AuditionsForm from "./AuditionsForm";
import dataPlaces from "../../data/auditions/places.json";
import dataButtons from "../../data/auditions/downloadButtons.json";
import dataInstruments from "../../data/auditions/instruments.json";
import Instruments from "./Instruments";
import Deadline from "./Deadline";

const Auditions = ({ formatDate }) => {
  const auditions = dataPlaces;
  const buttons = dataButtons;
  const instruments = dataInstruments;

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <Instruments instruments={instruments} />

        <p className="text-justify mt-5">
          Please make sure you{" "}
          <span className="beCareful">read the Regulation carefully</span>{" "}
          before registering for the ESYO Auditions 2024. This is important to
          ensure a smooth and quick registration process. You will find more
          information about how to audition for the ESYO below in this page.
          Should you have any doubts or questions about your eligibility for
          participating in the auditions or about the registration process,
          please <span className="beCareful">don’t hesitate to contact us</span>
          .
        </p>

        <Deadline date="2024-05-31" formatDate={formatDate} />
        <AuditionsDownloadButtons buttons={buttons} />
        <AuditionsCard auditions={auditions} formatDate={formatDate} />
        <AuditionsForm title={"Audition Form"} />
      </div>
    </div>
  );
};

export default Auditions;
