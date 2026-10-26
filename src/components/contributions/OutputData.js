const OutputData = ({ renderBody, getIdBody, year, yearLabel }) => {
  const content = getIdBody(year);
  const records = content.split(/\n?---\n?/).filter(Boolean);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
        <h2 className="text-[#f68642] text-xl font-bold uppercase tracking-wider mb-0">
          Records for {yearLabel || "Selected Year"}
        </h2>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/15">
          {records.length} {records.length === 1 ? "Contribution" : "Contributions"}
        </span>
      </div>

      <div className="space-y-6">
        {records.map((record, index) => (
          <div
            key={index}
            className="pb-6 border-b border-white/10 last:border-b-0 text-gray-200 text-sm sm:text-base leading-relaxed text-left"
          >
            {renderBody(record.trim())}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutputData;
