import React, { useState } from "react";

const FacultyMember = ({ members }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderText = (text, isExpanded) => {
    if (isExpanded) return text;

    const words = text.split(" ");
    if (words.length <= 90) return text;

    return `${words.slice(0, 90).join(" ")}...`;
  };

  return (
    <div className="col-md-12">
      {members.map((member) => (
        <div className="card mb-3 bg-grey" key={member.id}>
          <div className="row no-gutters align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={`./img/faculty/${member.photo}`}
                className="card-img mt-3"
                alt={`${member.name}, ${member.role}`}
              />
              <h3 className="card-title text-white text-2xl mt-1">
                {member.name}
              </h3>
              <h5 className="card-subtitle mb-2 beCareful">{member.role}</h5>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-justify">
                  {renderText(member.cv, expandedId === member.id)}
                </p>
                {member.cv.split(" ").length > 90 && (
                  <button
                    className="underline mt-2"
                    onClick={() => handleToggle(member.id)}
                  >
                    <small>
                      {expandedId === member.id ? "Read Less" : "Read More"}
                    </small>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyMember;
