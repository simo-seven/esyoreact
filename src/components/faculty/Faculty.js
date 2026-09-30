import FacultyMember from "./FacultyMember";
import data from "../../data/faculty.json";
import ComingSoon from "../reusable/ComingSoon";
import { useState } from "react";
import SEO from "../common/SEO";

const Faculty = () => {
  const members = data;
  const [family, setFamily] = useState("strings");

  const categories = [
    { key: "strings", label: "Strings" },
    { key: "windsbrass", label: "Winds & Brass" },
    { key: "harp", label: "Harp" },
    { key: "percussion", label: "Percussion" },
  ];

  return (
    <>
      <SEO
        title="Faculty"
        description="Explore the distinguished international faculty of the European Spirit of Youth Orchestra, featuring renowned master musicians and section leaders from across Europe."
        keywords="ESYO faculty, violin masterclasses, cello teachers, orchestra professors, European music faculty"
        canonical="https://esyo.eu/faculty"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
          <div className="row">
            {members?.length === 0 ? (
              <ComingSoon />
            ) : (
              <>
                <div className="col-12 d-flex justify-content-center mb-8">
                  <div
                    className="flex flex-wrap justify-center gap-2 p-1.5 bg-black/40 rounded-full border border-white/10"
                    role="group"
                    aria-label="Filter faculty by instrument section"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        className={`py-2 px-5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
                          family === cat.key
                            ? "bg-[#f68642] text-black shadow-lg shadow-orange-500/30"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        type="button"
                        onClick={() => setFamily(cat.key)}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
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
