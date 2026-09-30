import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faLock,
  faUser,
  faTicket,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { parseConcertInfo } from "../../utils/concertUtils";

const MobileConcerts = ({ concerts, bcg = "bckblack" }) => {
  const [expandedConcerts, setExpandedConcerts] = useState({});

  const toggleExpand = (id) => {
    setExpandedConcerts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`container-xxl py-4 onlyMobile ${bcg}`}>
      <div className="container py-2 px-3">
        <div className="row g-4">
          {concerts.map((concert) => {
            const isExpanded = !!expandedConcerts[concert.id];
            const { title, admission, isFree, isPrivate } = parseConcertInfo(concert);
            const hasExtraInfo = Boolean(concert.program);

            return (
              <div className="col-12" key={concert.id}>
                <div className="rounded-2xl bg-[#1c1c1b] border border-white/10 p-5 text-center shadow-lg transition-all duration-300">
                  {/* Event Title */}
                  <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2.5">
                    {title}
                  </h2>

                  {/* Badges: Admission & City */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                    {isFree ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {admission}
                      </span>
                    ) : isPrivate ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                        <FontAwesomeIcon icon={faLock} className="text-xs" />
                        {admission}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f68642]/15 text-[#f68642] border border-[#f68642]/30 uppercase tracking-wider">
                        <FontAwesomeIcon icon={faTicket} className="text-xs" />
                        {admission}
                      </span>
                    )}

                    <span className="inline-block px-3 py-1 rounded-full bg-[#f68642] text-black text-xs font-bold uppercase tracking-wider">
                      {concert.city}
                    </span>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-200 mb-2">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-[#f68642]" />
                      <span>{concert.date}</span>
                    </span>

                    {!concert.private && concert.time && (
                      <span className="text-gray-300 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faClock} className="text-[#f68642] text-xs" />
                        <span>{concert.time}</span>
                      </span>
                    )}

                    {concert.private && (
                      <span className="text-amber-400 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faLock} className="text-xs" />
                        <span>Private</span>
                      </span>
                    )}
                  </div>

                  {/* Venue */}
                  <p className="text-gray-300 text-xs sm:text-sm flex items-center justify-center gap-1.5 mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#f68642] text-xs shrink-0" />
                    <span>{concert.venue}</span>
                  </p>

                  {/* Special Guest */}
                  {concert.special_guest && (
                    <div className="text-center mb-3">
                      <span className="text-[#f68642] text-xs font-medium bg-black/40 py-1.5 px-3 rounded-lg inline-flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Special Guest: {concert.special_guest}</span>
                      </span>
                    </div>
                  )}

                  {/* Expand Programme Toggle */}
                  {hasExtraInfo && (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleExpand(concert.id)}
                        className="text-xs uppercase tracking-wider font-semibold text-[#f68642] hover:text-white flex items-center justify-center gap-1.5 mx-auto mt-2 py-2 px-4 rounded-full border border-[#f68642]/40 active:scale-95 transition-all duration-200"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Programme" : "View Programme & Details"}</span>
                        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-white/10 text-left animate__animated animate__fadeIn">
                          <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                            <span className="text-xs font-bold text-[#f68642] uppercase tracking-wider block mb-1">
                              Programme
                            </span>
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-0 font-normal">
                              {concert.program}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileConcerts;
