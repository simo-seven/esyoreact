import DesktopConcerts from "./components/DesktopConcerts";
import MobileConcerts from "./components/MobileConcerts";
import Repertoire from "./components/Repertoire";
import ComingSoon from "./components/ComingSoon";
import data from "./data/concerts.json";
import repertoire from "./data/repertoire.json";

const ConcertTours = () => {
  const concerts = data;
  const programme = repertoire;
  return (
    <>
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
