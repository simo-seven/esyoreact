const SelectData = ({data, setYear}) => {
  return (
    <div className="col-lg-7">
      <div className="wow fadeInUp text-center" data-wow-delay="0.3s">
        <form className="text-center mt-20 mb-20">
          <label>Please select the year you want to view</label>
          <select
            className="form-control text-center mt-1"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            {data.map((contribution) => (
              <option key={contribution.id} value={contribution.id}>
                {contribution.year}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default SelectData;
