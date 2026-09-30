import DesktopConcerts from "./DesktopConcerts";
import MobileConcerts from "./MobileConcerts";
import Repertoire from "./Repertoire";
import ComingSoon from "../reusable/ComingSoon";
import data from "../../data/concerts/venues.json";
import repertoire from "../../data/concerts/repertoire.json";
import SEO from "../common/SEO";

const ConcertTours = () => {
  const concerts = data;
  const programme = repertoire;

  const eventSchemas = concerts.map((concert) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": concert.description || `ESYO Concert - ${concert.city}`,
    "startDate": `2026-09-22T20:30:00+02:00`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": concert.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": concert.city,
        "addressCountry": "IT"
      }
    },
    "performer": {
      "@type": "MusicGroup",
      "name": "European Spirit of Youth Orchestra",
      "url": "https://esyo.eu"
    },
    "description": `${concert.description || ""}. ${concert.program || ""}`.trim()
  }));

  return (
    <>
      <SEO
        title="Note d'Autunno - Concert Tours"
        description="Discover the European Spirit of Youth Orchestra's concert tour dates, venues, and programmes across Europe. Join us for unforgettable classical performances."
        keywords="ESYO concert tours, Note d'Autunno, Trieste classical concerts, youth orchestra performances"
        canonical="https://esyo.eu/concertours"
        ogType="website"
        schema={eventSchemas.length > 0 ? eventSchemas[0] : null}
      />

      {concerts?.length === 0 ? (
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <ComingSoon />
            {programme?.length > 0 && <Repertoire programme={programme} />}
          </div>
        </div>
      ) : (
        <div className="py-2">
          <MobileConcerts concerts={concerts} bcg="" />
          <DesktopConcerts concerts={concerts} bcg="" />
          {programme?.length > 0 && (
            <div className="container-xxl py-5">
              <div className="container px-lg-5">
                <Repertoire programme={programme} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ConcertTours;
