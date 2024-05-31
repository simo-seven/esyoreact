import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Deadline = ({deadline, formatDate}) => {
  return (
    <div className="row g-4 justify-content-center auditionDeadline">
      <div
        className="col-lg-5 col-md-6 mx-2 wow fadeInUp contactCards"
        data-wow-delay="0.1s"
      >
        <div className="d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <FontAwesomeIcon icon={faCalendar} className="beCareful fa-4x" />{" "}
          </div>
          <h3 className="margintop2vh text-white text-3xl">
            Auditions Deadline
          </h3>
          <h4 className="beCareful text-2xl">
            {formatDate(deadline)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Deadline;
