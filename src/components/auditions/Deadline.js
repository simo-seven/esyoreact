import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Deadline = ({ deadline, formatDate }) => {
  return (
    <div className="py-5 text-center my-4 border-t border-b border-white/10" aria-label="Auditions Deadline">
      <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
        <span></span>Important Date<span></span>
      </p>
      <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#f68642] me-2" />
        Auditions Deadline
      </h3>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f68642] my-2">
        {formatDate(deadline)}
      </div>
      <p className="text-gray-400 text-sm mb-0">
        Applications must be submitted by 23:59 CET
      </p>
    </div>
  );
};

export default Deadline;
