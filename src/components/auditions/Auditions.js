// import AuditionPlaces from "./AuditionPlaces";
import DownloadButtons from "../reusable/DownloadButtons";
import AuditionsForm from "./AuditionsForm";
// import places from "../../data/auditions/places.json";
import buttons from "../../data/auditions/downloadButtons.json";
import instruments from "../../data/auditions/instruments.json";
import Instruments from "./Instruments";
import Deadline from "./Deadline";
import Intro from "./Intro";
import Expired from "./Expired";
import UpcomingAuditions from "./UpcomingAuditions";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { Link } from "react-router-dom";

const Auditions = ({ formatDate }) => {
  const startDate = "2025-12-01";
  const deadline = "2026-03-31";

  const today = new Date();
  const deadlineDate = new Date(deadline);
  const startDateDate = new Date(startDate);

  return (
    <>
      <Helmet>
        <title>Auditions | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Audition for the European Spirit of Youth Orchestra. Join top musicians, perform in prestigious venues, and grow your talent in a vibrant musical community."
        />
        <link rel="canonical" href="https://esyo.eu/auditions" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auditions | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Audition for the European Spirit of Youth Orchestra. Join top musicians, perform in prestigious venues, and grow your talent in a vibrant musical community."
        />
        <meta property="og:url" content="https://esyo.eu/auditions" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auditions | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Audition for the European Spirit of Youth Orchestra. Join top musicians, perform in prestigious venues, and grow your talent in a vibrant musical community."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      {today > deadlineDate ? (
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <Expired deadline={deadline} formatDate={formatDate} />
          </div>
        </div>
      ) : today < startDateDate ? (
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <UpcomingAuditions
              startDate={startDate}
              deadline={deadline}
              formatDate={formatDate}
            />
          </div>
        </div>
      ) : (
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <p>
              <span className="beCareful">Welcome</span> to the Auditions page!
            </p>
            <p className="text-justify">
              The Orchestra’s Summer Tour 2025 is scheduled to take place from
              <span className="beCareful"> July 13 to August 3, 2025</span>,
              featuring six concerts across Italy, Slovenia, Croatia, and
              Austria. Stay tuned for more details as the date draws closer. You
              can explore the repertoire on the{" "}
              <Link to="/concertours" className="beCareful">
                Concert Tour
              </Link>{" "}
              page.
            </p>

            <Instruments instruments={instruments} />
            <Intro />
            <Deadline deadline={deadline} formatDate={formatDate} />
            {/* <AuditionPlaces places={places} formatDate={formatDate} /> */}
            <p className="mt-14 text-justify">
              <span className="beCareful text-2xl">
                How does the audition look like?
              </span>
            </p>
            <p className="text-justify">
              Candidates are asked to perform a short program (two, in the
              character contrasting pieces) of their own choice (max. 5-7 min.)
              and will be selected both based on their performances as well as
              of their team- working capabilities. The final decision will be
              made by the Artistic Director in agreement with the ESYO faculty
              members.
            </p>
            <p className="mt-10 text-justify">
              <span className="beCareful text-2xl">
                What happens after you submit your audition form?
              </span>
            </p>
            <p className="text-justify mb-3">
              {`After you submit your form, we will review your application. If the Artistic Director selects you, we will get in touch once the audition process is complete (after ${formatDate(
                deadline
              )}).`}
            </p>
            <DownloadButtons buttons={buttons} />
            <AuditionsForm title={"Audition Form"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Auditions;
