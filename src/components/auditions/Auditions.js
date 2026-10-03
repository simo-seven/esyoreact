import DownloadButtons from "../reusable/DownloadButtons";
import AuditionsForm from "./AuditionsForm";
import buttons from "../../data/auditions/downloadButtons.json";
import instruments from "../../data/auditions/instruments.json";
import Instruments from "./Instruments";
import Deadline from "./Deadline";
import Intro from "./Intro";
import Expired from "./Expired";
import UpcomingAuditions from "./UpcomingAuditions";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";

const Auditions = ({ formatDate }) => {
  const startDate = "2025-12-01";
  const deadline = "2026-03-31";

  const today = new Date();
  const deadlineDate = new Date(deadline);
  const startDateDate = new Date(startDate);

  return (
    <>
      <SEO
        title="Auditions"
        description="Audition for the European Spirit of Youth Orchestra. Join top young musicians from across Europe, perform in prestigious venues, and develop your talent with international faculty."
        keywords="ESYO auditions, orchestra auditions Europe, youth orchestra audition, violin auditions, cello auditions"
        canonical="https://esyo.eu/auditions"
        ogType="website"
      />

      {today > deadlineDate ? (
        <section className="container-xxl py-5 bckblack" aria-label="Auditions Closed">
          <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
            <Expired deadline={deadline} formatDate={formatDate} />
          </div>
        </section>
      ) : today < startDateDate ? (
        <section className="container-xxl py-5 bckblack" aria-label="Auditions Upcoming">
          <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
            <UpcomingAuditions
              startDate={startDate}
              deadline={deadline}
              formatDate={formatDate}
            />
          </div>
        </section>
      ) : (
        <section className="container-xxl py-5 bckblack" aria-label="Auditions Content">
          <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
            {/* Header / Intro section */}
            <div className="mb-6">
              <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
                Season 2027 / 2028
              </p>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Auditions & Applications
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-4">
                <span className="beCareful">Welcome</span> to the Auditions page!
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-4">
                The next ESYO tour is scheduled for{" "}
                <span className="beCareful">Summer 2027</span>, followed by the
                Winter Tour taking place{" "}
                <span className="beCareful">between 2027 and 2028</span>. The
                music program will be published on the{" "}
                <Link to="/concertours" className="beCareful">
                  Concert Tour
                </Link>{" "}
                page.
              </p>
            </div>

            {/* Instruments Section */}
            <Instruments instruments={instruments} />

            {/* Training Intro Section */}
            <Intro />

            {/* Deadline Section */}
            <Deadline deadline={deadline} formatDate={formatDate} />

            {/* Audition Details & Questions */}
            <section className="py-4" aria-label="Audition Details">
              <div className="mb-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  How does the audition look like?
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                  Candidates are asked to perform a short program (two, in the
                  character contrasting pieces) of their own choice (max. 5 - 7
                  min.) and will be selected both based on their performances as
                  well as of their team-working capabilities. The final decision
                  will be made by the Artistic Director in agreement with the ESYO
                  faculty members.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  What happens after I submit the form?
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                  {`After you submit your form, we will review your application. If the Artistic Director selects you, we will get in touch once the audition process is complete (after ${formatDate(
                    deadline
                  )}).`}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  What else do I need to know?
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-4">
                  Please take some time to carefully read through the{" "}
                  <span className="beCareful">
                    Regulations, Fees & Benefits, and Annual Program documents
                  </span>{" "}
                  before submitting your application to ensure you are fully
                  informed about the orchestra's policies and offerings.
                </p>
                <div className="text-center pt-2">
                  <DownloadButtons buttons={buttons} />
                </div>
              </div>
            </section>

            {/* Audition Form */}
            <AuditionsForm title={"Audition Form"} />
          </div>
        </section>
      )}
    </>
  );
};

export default Auditions;
