import FacultyMember from "./FacultyMember";
import data from "./data/faculty.json";
import ComingSoon from "./ComingSoon";
import { useState } from "react";

const Faculty = () => {
  const members = data; 
  const [family, setFamily] = useState("strings");

  const strings = () => setFamily("strings");
  const woodwinds = () => setFamily("woodwinds");
  const brass = () => setFamily("brass");
  const percussion = () => setFamily("percussion");

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="container-fluid">
          <div className="row">
            {members?.length === 0 ? ( 
              <ComingSoon />
            ) : (
              <>
                <div className="col-12 d-flex justify-content-center">
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => strings()}
                    >
                      Strings
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => woodwinds()}
                    >
                      Woodwind
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => brass()}
                    >
                      Brass
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => percussion()}
                    >
                      Percussion
                    </button>
                  </div>
                </div>{" "}
                <FacultyMember
                  members={members.filter((member) => member.family === family)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
