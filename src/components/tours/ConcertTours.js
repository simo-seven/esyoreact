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
        <title>Summer Tour | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <link rel="canonical" href="https://esyo.eu/concertours" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Summer Tour | European Spirit of Youth Orchestra"
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
          content="Summer Tour | European Spirit of Youth Orchestra"
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
                      <span className="beCareful">Alberto Casadei</span> is an
                      Italian cellist widely regarded as one of the most
                      compelling musicians of his generation. A dynamic and
                      versatile artist, he is equally active as a soloist and
                      chamber musician, combining his concert career with an
                      in-depth compositional research focused on expanding the
                      expressive possibilities of the cello in both classical
                      and electric contexts. He has performed on some of the
                      world’s most iconic stages, including the Great Hall of
                      the Moscow Conservatory and the renowned Salle Cortot in
                      Paris. He has appeared as a soloist with leading
                      international orchestras under conductors such as Valery
                      Gergiev and Michele Mariotti, and has collaborated with
                      distinguished artists including Patricia Kopatchinskaja. A
                      prizewinner of major international competitions, he also
                      served as principal cello of the Rotterdam Philharmonic
                      Orchestra and the Arena di Verona Orchestra. He currently
                      teaches at the Conservatorio G. Braga and is co-founder of
                      the Stradivari International Music Academy. He performs on
                      a 1698 cello by Domenico Roggieri, once favored by Pablo
                      Casals.
                    </p>
                    <p className="text-justify">
                      <span className="beCareful">Jelin Lee</span> is a Korean
                      violinist whose career began at an early age, debuting as
                      a soloist at seven with the Seoul Symphony Orchestra.
                      Prizewinner of several major international competitions,
                      she has refined her artistry through masterclasses with
                      leading violinists such as Vadim Repin and Zakhar Bron.
                      She has performed as a soloist at renowned international
                      festivals in Europe, Russia, and the United States,
                      collaborating with orchestras including the KBS Symphony
                      Orchestra and the Berlin Symphoniker. Currently based in
                      Graz, she continues her advanced studies at the University
                      of Music and Performing Arts Graz and performs on an
                      antique violin by the London maker Furber
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
