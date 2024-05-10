import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Person = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <div
          className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
          data-wow-delay="0.1s"
          key={person.id}
        >
          <div className="d-flex flex-column text-center rounded">
            <h3 className="margintop2vh text-white text-2xl">
              {person.position}
            </h3>
            <Link to={person.link}>
              {person.position === "Developer and Webmaster" ? (
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="beCareful me-1"
                />
              ) : (
                <FontAwesomeIcon icon={faEnvelope} className="beCareful me-1" />
              )}{" "}
              {person.name}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
