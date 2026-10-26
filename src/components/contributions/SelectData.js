const SelectData = ({ data, year, setYear }) => {
  return (
    <div className="max-w-xs mx-auto text-center my-4">
      <label
        htmlFor="year-select"
        className="text-white text-sm font-semibold uppercase tracking-wider mb-2 block"
      >
        Select Calendar Year
      </label>
      <select
        id="year-select"
        className="w-full bg-[#141414] text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 focus:border-[#f68642] focus:ring-1 focus:ring-[#f68642] outline-none text-center transition-all duration-200 cursor-pointer text-base"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        {data.map((contribution) => (
          <option
            key={contribution.id}
            value={contribution.id}
            className="bg-[#1c1c1b] text-white py-2"
          >
            Year {contribution.year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectData;
