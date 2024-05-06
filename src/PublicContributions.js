import { useState } from "react";
import data from "./data/publicContributions.json";

const PublicContributions = () => {
  const contributions = data;
  const [year, setYear] = useState("1");

  const getIdBody = (id) => {
    const item = data.find((item) => item.id === id);
    return item ? item.body : "No matching id found";
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-5 lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <p>
              On this administrative transparency page you will find all public
              contributions received in recent years. To view the desired year,
              simply select it in the box below. For administrative reasons the
              text is given in Italian.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="wow fadeInUp text-center" data-wow-delay="0.3s">
                  {/* <h2 className="text-white text-4xl mb-20">Select year</h2> */}
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
              <h3 className="text-2xl beCareful">
                Public contributions received
              </h3>
              <p className="mt-1 mb-10 text-justify">{getIdBody(year)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicContributions;
