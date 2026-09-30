import { useState } from "react";

const FacultyMember = ({ members }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderText = (text, isExpanded) => {
    if (isExpanded) return text;
    const words = text.split(" ");
    if (words.length <= 80) return text;
    return `${words.slice(0, 80).join(" ")}...`;
  };

  return (
    <div className="col-12 space-y-6">
      {members.map((member) => {
        const isExpanded = expandedId === member.id;
        const words = member.cv.split(" ");
        const isLong = words.length > 80;

        return (
          <div
            className="card mb-4 bg-[#1f1f1f] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-[#f68642]/40 transition-all duration-300"
            key={member.id}
          >
            <div className="row g-0 align-items-center p-4 sm:p-6">
              <div className="col-12 col-md-4 text-center mb-4 md:mb-0">
                <div className="relative inline-block">
                  <img
                    src={`/img/faculty/${member.photo}`}
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-[#f68642]/50 shadow-md mx-auto"
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                  />
                </div>
                <h3 className="card-title text-white text-xl sm:text-2xl font-bold mt-4 mb-1">
                  {member.name}
                </h3>
                <h4 className="card-subtitle text-[#f68642] text-sm sm:text-base font-semibold">
                  {member.role}
                </h4>
              </div>
              <div className="col-12 col-md-8 md:ps-6">
                <div className="card-body p-0">
                  <p className="card-text text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                    {renderText(member.cv, isExpanded)}
                  </p>
                  {isLong && (
                    <button
                      type="button"
                      className="mt-3 text-sm font-semibold text-[#f68642] hover:text-white flex items-center gap-1 transition-colors duration-200"
                      onClick={() => handleToggle(member.id)}
                    >
                      <span>{isExpanded ? "Read Less" : "Read More"}</span>
                      <span>{isExpanded ? "↑" : "↓"}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacultyMember;
