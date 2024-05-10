import { useState } from "react";
import data from "../../data/publicContributions.json";
import SelectData from "./SelectData";
import OutputData from "./OutputData";

const PublicContributions = ({ renderBody }) => {
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
          <SelectData data={data} setYear={setYear} />
          
          <OutputData
            renderBody={renderBody}
            getIdBody={getIdBody}
            year={year}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicContributions;
