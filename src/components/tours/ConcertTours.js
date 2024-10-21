import DesktopConcerts from "./DesktopConcerts";
import MobileConcerts from "./MobileConcerts";
import Repertoire from "./Repertoire";
import OrchestraMembers from "./OrchestraMembers";
// import Concerts from "./Concerts";
import ComingSoon from "../reusable/ComingSoon";
import data from "../../data/concerts/venues.json";
import members from "../../data/concerts/orchestra.json";
import repertoire from "../../data/concerts/repertoire.json";
import { Helmet } from "react-helmet-async";

const ConcertTours = () => {
  const concerts = data;
  const programme = repertoire;
  return (
    <>
      <Helmet>
        <title>Autumn Tour | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <link rel="canonical" href="https://esyo.eu/concertours" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Concert Tours | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <meta property="og:url" content="https://esyo.eu/concertours" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Concert Tours | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      {concerts?.length === 0 ? (
        <>
          <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
              <div className="container-fluid">
                <div className="row">
                  <ComingSoon />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <MobileConcerts concerts={concerts} bcg={""} />
          <DesktopConcerts concerts={concerts} bcg={""} />
          {/* <Concerts concerts={concerts} /> */}
          <Repertoire programme={programme} />
          <OrchestraMembers members={members} />
        </>
      )}
    </>
  );
};

export default ConcertTours;
