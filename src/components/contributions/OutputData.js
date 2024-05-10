const OutputData = ({renderBody, getIdBody, year}) => {
  return (
    <>
      <h3 className="text-2xl beCareful">Public contributions received</h3>
      <div className="mt-1 mb-10 lg:text-justify">
        {renderBody(getIdBody(year))}
      </div>
    </>
  );
};

export default OutputData;
