const SECTIONS = [
  {
    name: "Strings",
    total: "34 spots",
    ids: [1, 2, 3, 4],
  },
  {
    name: "Woodwinds",
    total: "9 spots",
    ids: [5, 6, 7, 8],
  },
  {
    name: "Brass",
    total: "11 spots",
    ids: [9, 10, 11, 12],
  },
  {
    name: "Timpani & Percussion",
    total: "4 spots",
    ids: [13],
  },
];

const Instruments = ({ instruments }) => {
  const getInstrument = (id) => instruments.find((i) => i.id === id);

  return (
    <section className="py-4 border-t border-white/10" aria-label="Available Positions">
      <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
        Open Positions
      </p>
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-1">
            Orchestra Positions
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-0">
            The auditions for the ESYO Symphony Orchestra are open for <strong className="text-white">59 spots</strong> across 4 sections:
          </p>
        </div>
        <span className="badge bg-[#f68642] text-black font-bold py-2 px-3 rounded-pill text-xs sm:text-sm">
          59 spots
        </span>
      </div>

      <div className="row g-4">
        {SECTIONS.map((section) => (
          <div key={section.name} className="col-12 col-md-6">
            <div className="border-top border-white/20 pt-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="text-[#f68642] text-lg font-bold uppercase tracking-wider mb-0">
                  {section.name}
                </h3>
                <span className="text-gray-400 text-xs font-semibold">
                  {section.total}
                </span>
              </div>

              <div className="d-flex flex-column gap-2">
                {section.ids.map((id) => {
                  const inst = getInstrument(id);
                  if (!inst) return null;

                  // Clean type & note if parenthetical
                  const match = inst.type.match(/^(.*?)\s*(\(.*?\))$/);
                  const mainName = match ? match[1] : inst.type;
                  const extraNote = match ? match[2] : null;

                  const count = inst.id === 13 ? 4 : parseInt(inst.quantity, 10);
                  const spotLabel = count === 1 ? "1 spot" : `${count} spots`;

                  return (
                    <div
                      key={inst.id}
                      className="d-flex align-items-center justify-content-between py-2 px-3 rounded bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="pr-2">
                        <span className="text-white font-medium text-sm sm:text-base">
                          {mainName}
                        </span>
                        {extraNote && (
                          <span className="text-gray-400 text-xs block sm:inline sm:ml-2">
                            {extraNote}
                          </span>
                        )}
                      </div>
                      <span className="badge bg-[#f68642]/20 text-[#f68642] border border-[#f68642]/30 font-bold px-2.5 py-1 rounded-pill text-xs whitespace-nowrap ml-2">
                        {spotLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instruments;
