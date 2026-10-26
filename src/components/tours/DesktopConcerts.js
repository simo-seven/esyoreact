import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLock,
  faUser,
  faMapMarkerAlt,
  faTicket,
  faCheckCircle,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { parseConcertInfo } from "../../utils/concertUtils";

const DesktopConcerts = ({ concerts, bcg = "" }) => {
  return (
    <div className={`container-xxl py-5 hideOnMobile ${bcg}`}>
      <div className="container py-4 sm:py-5 px-lg-5">
        <div className="row g-4">
          {concerts.map((concert) => {
            const { title, admission, isFree, isPrivate, isPassed, day, month } =
              parseConcertInfo(concert);

            return (
              <div className="col-12" key={concert.id}>
                <div
                  className={`card mb-4 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isPassed
                      ? "border border-white/5 border-l-4 border-l-zinc-500 bg-[#171716] opacity-75 hover:opacity-100"
                      : "border border-white/15 border-l-4 border-l-[#f68642] bg-[#1c1c1b] hover:border-[#f68642]/60 hover:shadow-2xl hover:shadow-[#f68642]/10"
                  }`}
                >
                  <div className="row g-0 items-stretch">
                    {/* Left Column: Date block, Time, City, Venue (Enlarged) */}
                    <div className="col-lg-5 col-md-5 p-6 sm:p-7 flex flex-col justify-between border-r border-white/10 bg-black/30">
                      <div>
                        {/* Big Date & Time Row */}
                        <div className="flex items-center gap-5 mb-5">
                          {/* Calendar Box */}
                          <div
                            className={`min-w-[92px] rounded-2xl overflow-hidden shadow-lg text-center border shrink-0 ${
                              isPassed
                                ? "border-zinc-700 bg-zinc-800"
                                : "border-[#f68642]/50 bg-black/70"
                            }`}
                          >
                            <div
                              className={`py-1.5 px-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                                isPassed
                                  ? "bg-zinc-700 text-gray-300"
                                  : "bg-[#f68642] text-black"
                              }`}
                            >
                              {month || "DATE"}
                            </div>
                            <div
                              className={`py-2 px-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-none ${
                                isPassed ? "text-gray-400" : "text-white"
                              }`}
                            >
                              {day || concert.date}
                            </div>
                          </div>

                          {/* Time & Status Badges */}
                          <div className="space-y-2">
                            {!concert.private && concert.time && (
                              <div className="text-white text-lg sm:text-xl font-extrabold flex items-center gap-2">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className={isPassed ? "text-gray-400" : "text-[#f68642]"}
                                />
                                <span>{concert.time}</span>
                              </div>
                            )}

                            {concert.private && (
                              <div className="text-amber-400 text-sm font-bold flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faLock} />
                                <span>Private Event</span>
                              </div>
                            )}

                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {isPassed ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gray-300 border border-white/15 uppercase tracking-wider">
                                  <FontAwesomeIcon icon={faCheckCircle} className="text-gray-400 text-xs" />
                                  Past Concert
                                </span>
                              ) : (
                                <>
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f68642]/20 text-[#f68642] border border-[#f68642]/40 uppercase tracking-wider shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#f68642] animate-pulse"></span>
                                    Upcoming
                                  </span>

                                  {isFree ? (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                      {admission}
                                    </span>
                                  ) : isPrivate ? (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                                      <FontAwesomeIcon icon={faLock} className="text-xs" />
                                      {admission}
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                                      <FontAwesomeIcon icon={faTicket} className="text-xs" />
                                      {admission}
                                    </span>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* City & Venue - Enlarged & High Contrast */}
                        <div className="space-y-1.5 pt-2 border-t border-white/10">
                          <h3 className="text-white font-extrabold text-xl sm:text-2xl uppercase tracking-wider mb-1">
                            {concert.city}
                          </h3>

                          <div className="text-gray-200 text-base sm:text-lg font-medium flex items-start gap-2.5">
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt}
                              className={`mt-1.5 shrink-0 text-base ${
                                isPassed ? "text-gray-500" : "text-[#f68642]"
                              }`}
                            />
                            <span className="leading-snug">{concert.venue}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Title, Programme, Special Guest, Flyer Download */}
                    <div className="col-lg-7 col-md-7 p-6 sm:p-7 flex flex-col justify-between">
                      <div>
                        <h2 className="text-white font-extrabold text-2xl lg:text-3xl tracking-tight mb-3">
                          {title}
                        </h2>

                        {concert.special_guest && (
                          <div className="text-[#f68642] font-semibold text-sm sm:text-base flex items-center gap-2 mb-3">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Special Guest: {concert.special_guest}</span>
                          </div>
                        )}

                        {concert.program && (
                          <div className="mt-3 p-4 rounded-xl bg-black/40 border border-white/10">
                            <span className="text-xs font-bold text-[#f68642] uppercase tracking-wider block mb-1.5">
                              Programme
                            </span>
                            <p className="text-gray-200 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-0 font-normal">
                              {concert.program}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Download Flyer Button when flyer is present */}
                      {concert.flyer && (
                        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                          <a
                            href={concert.flyer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary py-2.5 px-6 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                            title="Download Official Concert Programme & Flyer"
                          >
                            <FontAwesomeIcon icon={faFilePdf} className="text-base" />
                            <span>Download Programme &amp; Flyer (PDF)</span>
                          </a>
                          <span className="text-gray-400 text-xs">
                            Official Concert Flyer
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopConcerts;
