import AuditionPlaces from "./AuditionPlaces";
import AuditionsDownloadButtons from "./AuditionsDownloadButtons";
import AuditionsForm from "./AuditionsForm";
import places from "../../data/auditions/places.json";
import buttons from "../../data/auditions/downloadButtons.json";
import instruments from "../../data/auditions/instruments.json";
import Instruments from "./Instruments";
import Deadline from "./Deadline";
import Intro from "./Intro";
import Expired from "./Expired";

const Auditions = ({ formatDate }) => {
  const deadline = "2024-05-31";

  // Create a new date that is one day after the deadline
  const deadlinePlusOneDay = new Date(
    new Date(deadline).setDate(new Date(deadline).getDate() + 1)
  );

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        {new Date(deadlinePlusOneDay) > new Date() ? (
          <>
            <Instruments instruments={instruments} />
            <Intro />
            <Deadline deadline={deadline} formatDate={formatDate} />
            <AuditionsDownloadButtons buttons={buttons} />
            <AuditionPlaces places={places} formatDate={formatDate} />
            <AuditionsForm title={"Audition Form"} />
          </>
        ) : (
          <Expired deadline={deadline} formatDate={formatDate} />
        )}
      </div>
    </div>
  );
};

export default Auditions;
