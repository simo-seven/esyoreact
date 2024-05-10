import { useState } from "react";
import data from "../data/publicContributions.json";

const PublicContributions = ({ renderBody }) => {
  const contributions = data;
  const [year, setYear] = useState("1");

  const getIdBody = (id) => {
    const item = data.find((item) => item.id === id);
    return item ? item.body : "No matching id found";
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <p className="lg:text-justify">
          On this administrative transparency page you will find all public
          contributions received in recent years. To view the desired year,
          simply select it in the box below. For administrative reasons the text
          is given in Italian.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp text-center" data-wow-delay="0.3s">
              <form className="text-center mt-20 mb-20">
                <label>Please select the year you want to view</label>
                <select
                  className="form-control text-center mt-1"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  {contributions.map((contribution) => (
                    <option key={contribution.id} value={contribution.id}>
                      {contribution.year}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
          <h3 className="text-2xl beCareful">Public contributions received</h3>
          <div className="mt-1 mb-10 lg:text-justify">
            {renderBody(getIdBody(year))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicContributions;
