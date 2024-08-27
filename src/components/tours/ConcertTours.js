import DesktopConcerts from "./DesktopConcerts";
import MobileConcerts from "./MobileConcerts";
import Repertoire from "./Repertoire";
import ComingSoon from "../ComingSoon";
import data from "../../data/concerts/venues.json";
import repertoire from "../../data/concerts/repertoire.json";
import { Helmet } from "react-helmet-async";

const ConcertTours = () => {
  const concerts = data;
  const programme = repertoire;
  return (
    <>
      <Helmet>
        <title>Concert Tours - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <link rel="canonical" href="/concertours" />
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
          <MobileConcerts concerts={concerts} />
          <DesktopConcerts concerts={concerts} />
          <Repertoire programme={programme} />
        </>
      )}
    </>
  );
};

export default ConcertTours;
