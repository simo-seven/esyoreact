import DesktopConcerts from "./DesktopConcerts";
import MobileConcerts from "./MobileConcerts";
import Repertoire from "./Repertoire";
// import OrchestraMembers from "./OrchestraMembers";
// import Concerts from "./Concerts";
import ComingSoon from "../reusable/ComingSoon";
import data from "../../data/concerts/venues.json";
// import members from "../../data/concerts/orchestra.json";
import repertoire from "../../data/concerts/repertoire.json";
import { Helmet } from "react-helmet-async";

const ConcertTours = () => {
  const concerts = data;
  const programme = repertoire;
  return (
    <>
      <Helmet>
        <title>Winter Tour | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <link rel="canonical" href="https://esyo.eu/concertours" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Winter Tour | European Spirit of Youth Orchestra"
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
          content="Winter Tour | European Spirit of Youth Orchestra"
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
                  {programme?.length !== 0 && (
                    <Repertoire programme={programme} />
                  )}
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
          <div className="container-xxl">
            <div className="container py-5 px-lg-5">
              <div className="container-fluid">
                <div className="row">
                  <Repertoire programme={programme} />
                  <h1 className="text-center m-3 text-white text-4xl">
                    Soloists
                  </h1>
                  <div className="col-md-12 mt-5 mb-5">
                  <p className="text-justify">
                    <span className="beCareful">Alberto Casadei</span> is one of
                    the most exciting cellists of his generation, acclaimed as
                    both a soloist and chamber musician. Alongside an
                    international concert career at major venues such as the
                    Salle Cortot and the Moscow Conservatory, he pursues an
                    innovative compositional research exploring the cello in
                    classical, electric, and electronic contexts. He plays a
                    1698 cello by Domenico Roggieri.
                  </p>
                  <p className="text-justify">
                    <span className="beCareful">Alexandra Tirsu</span> is a
                    Moldovan-born, Vienna-based violinist with an international
                    career shaped by major competition prizes and worldwide
                    critical acclaim. She performs regularly in leading halls
                    such as the Vienna Konzerthaus and the Concertgebouw,
                    collaborating with renowned artists and orchestras across
                    Europe and beyond. She plays the 1717 “Reifenberg” violin by
                    Antonio Stradivari, courtesy of the The Stradivari Society.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <OrchestraMembers members={members} /> */}
        </>
      )}
    </>
  );
};

export default ConcertTours;
