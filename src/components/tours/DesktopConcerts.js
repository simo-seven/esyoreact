import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLock,
  faUser,
  faMapMarkerAlt,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { parseConcertInfo } from "../../utils/concertUtils";

const DesktopConcerts = ({ concerts, bcg = "" }) => {
  return (
    <div className={`container-xxl py-5 hideOnMobile ${bcg}`}>
      <div className="container py-4 sm:py-5 px-lg-5">
        <div className="row g-4">
          {concerts.map((concert) => {
            const { title, admission, isFree, isPrivate } = parseConcertInfo(concert);

            return (
              <div className="col-12" key={concert.id}>
                <div className="card mb-4 rounded-2xl overflow-hidden border border-white/10 bg-[#1c1c1b] hover:border-[#f68642]/50 hover:shadow-2xl transition-all duration-300">
                  <div className="row g-0 items-stretch">
                    {/* Left Column: Date, City, Venue, Time */}
                    <div className="col-lg-4 col-md-5 p-5 flex flex-col justify-between border-r border-white/5 bg-black/25">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block bg-[#f68642] text-black font-bold px-3 py-1.5 rounded-lg text-sm uppercase tracking-wider shadow-sm">
                            {concert.date}
                          </span>
                          {!concert.private && concert.time && (
                            <span className="text-gray-300 text-sm font-medium flex items-center gap-1.5">
                              <FontAwesomeIcon icon={faClock} className="text-[#f68642]" />
                              <span>{concert.time}</span>
                            </span>
                          )}
                          {concert.private && (
                            <span className="text-amber-400 text-sm font-medium flex items-center gap-1.5">
                              <FontAwesomeIcon icon={faLock} />
                              <span>Private</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2">
                          {concert.city}
                        </h3>

                        <div className="text-gray-300 text-sm flex items-start gap-2">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="text-[#f68642] mt-1 shrink-0"
                          />
                          <span className="leading-snug">{concert.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Title, Admission, Special Guest, Programme */}
                    <div className="col-lg-8 col-md-7 p-5 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <h2 className="text-white font-bold text-2xl lg:text-3xl tracking-tight mb-0">
                          {title}
                        </h2>
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
                      </div>

                      {concert.special_guest && (
                        <div className="text-[#f68642] font-semibold text-sm flex items-center gap-2 mt-2">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Special Guest: {concert.special_guest}</span>
                        </div>
                      )}

                      {concert.program && (
                        <div className="mt-3 p-4 rounded-xl bg-black/40 border border-white/5">
                          <span className="text-xs font-bold text-[#f68642] uppercase tracking-wider block mb-1">
                            Programme
                          </span>
                          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-0 font-normal">
                            {concert.program}
                          </p>
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
