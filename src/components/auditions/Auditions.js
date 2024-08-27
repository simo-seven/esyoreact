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
import UpcomingAuditions from "./UpcomingAuditions";

const Auditions = ({ formatDate }) => {
  const startDate = "2024-12-01";
  const deadline = "2025-03-31";

  const today = new Date();
  const deadlineDate = new Date(deadline);
  const startDateDate = new Date(startDate);

  if (today > deadlineDate) {
    // Auditions are expired
    return (
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <Expired deadline={deadline} formatDate={formatDate} />
        </div>
      </div>
    );
  } else if (today < startDateDate) {
    // Auditions are upcoming
    return (
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <UpcomingAuditions startDate={startDate} deadline={deadline} formatDate={formatDate} />
        </div>
      </div>
    );
  } else {
    // Auditions are currently ongoing
    return (
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <>
            <Instruments instruments={instruments} />
            <Intro />
            <Deadline deadline={deadline} formatDate={formatDate} />
            <AuditionsDownloadButtons buttons={buttons} />
            <AuditionPlaces places={places} formatDate={formatDate} />
            <AuditionsForm title={"Audition Form"} />
          </>
        </div>
      </div>
    );
  }
};

export default Auditions;

