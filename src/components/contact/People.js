import Person from './Person';
import people from "../../data/contactPeople.json";

const People = () => {
  return (
    <div className="container-xxl py-5 mb-0">
      <div className="container py-5 px-lg-5 pt-0">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-4xl" id="fillout">
            Our Team
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <Person people={people} />
        </div>
      </div>
    </div>
  );
};

export default People;
