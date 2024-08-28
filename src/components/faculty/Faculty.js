import FacultyMember from "./FacultyMember";
import data from "../../data/faculty.json";
import ComingSoon from "../ComingSoon";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Faculty = () => {
  const members = data;
  const [family, setFamily] = useState("strings");

  const strings = () => setFamily("strings");
  const woodwinds = () => setFamily("woodwinds");
  const brass = () => setFamily("brass");
  const percussion = () => setFamily("percussion");
  const harp = () => setFamily("harp");

  return (
    <>
      <Helmet>
        <title>Faculty | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Explore the talented faculty of the European Spirit of Youth Orchestra, featuring leaders from string, woodwind, percussion, harp, and brass sections."
        />
        <link rel="canonical" href="/faculty" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Faculty | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Explore the talented faculty of the European Spirit of Youth Orchestra, featuring leaders from string, woodwind, percussion, harp, and brass sections."
        />
        <meta property="og:url" content="https://esyo.eu/faculty" />
        <meta
          property="og:image"
          content="https://esyo.eu/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Faculty | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Explore the talented faculty of the European Spirit of Youth Orchestra, featuring leaders from string, woodwind, percussion, harp, and brass sections."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/logo.png"
        />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row">
            {members?.length === 0 ? (
              <ComingSoon />
            ) : (
              <>
                <div className="col-12 d-flex justify-content-center">
                  <div
                    className="btn-group btn-group-toggle mb-5"
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
                      Winds
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
                      onClick={() => harp()}
                    >
                      Harp
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
    </>
  );
};

export default Faculty;
