import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faLock,
  faUser,
  faTicket,
  faChevronDown,
  faChevronUp,
  faCheckCircle,
  faFilePdf,
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
            const { title, admission, isFree, isPrivate, isPassed, day, month } =
              parseConcertInfo(concert);
            const hasExtraInfo = Boolean(concert.program);

            return (
              <div className="col-12" key={concert.id}>
                <div
                  className={`rounded-2xl p-5 shadow-lg transition-all duration-300 ${
                    isPassed
                      ? "bg-[#171716] border border-white/5 border-l-4 border-l-zinc-500 opacity-75"
                      : "bg-[#1c1c1b] border border-white/10 border-l-4 border-l-[#f68642]"
                  }`}
                >
                  {/* Top: Large Date Calendar Box + Time & Badges */}
                  <div className="flex items-center gap-3.5 mb-4 text-left">
                    {/* Calendar Box */}
                    <div
                      className={`min-w-[76px] rounded-2xl overflow-hidden shadow-md text-center border shrink-0 ${
                        isPassed
                          ? "border-zinc-700 bg-zinc-800"
                          : "border-[#f68642]/50 bg-black/70"
                      }`}
                    >
                      <div
                        className={`py-1 px-2 text-[11px] font-extrabold uppercase tracking-widest ${
                          isPassed
                            ? "bg-zinc-700 text-gray-300"
                            : "bg-[#f68642] text-black"
                        }`}
                      >
                        {month || "DATE"}
                      </div>
                      <div
                        className={`py-1.5 px-2 text-2xl sm:text-3xl font-black leading-none ${
                          isPassed ? "text-gray-400" : "text-white"
                        }`}
                      >
                        {day || concert.date}
                      </div>
                    </div>

                    {/* Time & Badges */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        {isPassed ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-gray-300 border border-white/15 uppercase tracking-wider">
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="text-gray-400 text-[10px]"
                            />
                            Past Concert
                          </span>
                        ) : (
                          <>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#f68642]/20 text-[#f68642] border border-[#f68642]/40 uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f68642] animate-pulse"></span>
                              Upcoming
                            </span>
                            {isFree ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                {admission}
                              </span>
                            ) : isPrivate ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                                <FontAwesomeIcon icon={faLock} className="text-[10px]" />
                                {admission}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                                <FontAwesomeIcon icon={faTicket} className="text-[10px]" />
                                {admission}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Time */}
                      {!concert.private && concert.time && (
                        <div className="text-white text-base sm:text-lg font-extrabold flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faClock}
                            className={isPassed ? "text-gray-400" : "text-[#f68642]"}
                          />
                          <span>{concert.time}</span>
                        </div>
                      )}
                      {concert.private && (
                        <div className="text-amber-400 text-xs font-bold flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faLock} />
                          <span>Private Event</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* City & Venue - Prominent & Legible */}
                  <div className="text-left mb-3 pb-3 border-b border-white/10">
                    <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wider mb-1">
                      {concert.city}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base font-medium flex items-start gap-2 mb-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className={`mt-1 shrink-0 ${
                          isPassed ? "text-gray-500" : "text-[#f68642]"
                        }`}
                      />
                      <span className="leading-snug">{concert.venue}</span>
                    </p>
                  </div>

                  {/* Concert Title & Special Guest */}
                  <div className="text-left mb-3">
                    <h2 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
                      {title}
                    </h2>
                    {concert.special_guest && (
                      <div className="text-[#f68642] text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 bg-black/40 py-1 px-2.5 rounded-lg">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Special Guest: {concert.special_guest}</span>
                      </div>
                    )}
                  </div>

                  {/* Download Flyer Button when flyer is present */}
                  {concert.flyer && (
                    <div className="mb-3">
                      <a
                        href={concert.flyer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full shadow-md active:scale-95 transition-all duration-200"
                        title="Download Official Concert Programme & Flyer"
                      >
                        <FontAwesomeIcon icon={faFilePdf} className="text-base" />
                        <span>Download Programme &amp; Flyer (PDF)</span>
                      </a>
                    </div>
                  )}

                  {/* Expand Programme Toggle */}
                  {hasExtraInfo && (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleExpand(concert.id)}
                        className={`text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl border active:scale-95 transition-all duration-200 ${
                          isPassed
                            ? "text-gray-300 border-white/10 bg-white/5 hover:bg-white/10"
                            : "text-[#f68642] border-[#f68642]/40 bg-[#f68642]/10 hover:bg-[#f68642]/20"
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Programme" : "View Programme"}</span>
                        <FontAwesomeIcon
                          icon={isExpanded ? faChevronUp : faChevronDown}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 text-left animate__animated animate__fadeIn">
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
