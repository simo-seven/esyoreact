import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
            {person.link ? (
              <Link to={person.link}>
                <FontAwesomeIcon icon={faEnvelope} className="beCareful me-1" />{" "}
                {person.name}
              </Link>
            ) : (
              <>
                {person.name}
              </>
            )}
            {person.formerMember && (
              <p className="mt-2 text-sm text-gray-400">
                {person.formerMember}
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
