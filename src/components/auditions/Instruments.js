const Instruments = ({ instruments }) => {
  return (
    <>
      <p>
        <span className="beCareful">Welcome</span> to the Auditions page!
      </p>
      <p className="text-justify">
        The orchestra's Summer Tour 2025 is scheduled to take place
        approximately from{" "}
        <span className="beCareful">July 20 to August 10, 2025</span>.
        Additional details will be provided as the date approaches. The 2025
        auditions for the ESYO Symphony Orchestra will be held for the following
        positions:
      </p>
      <ul className="list-disc list-inside ml-5 mt-5">
        {instruments.map(({ id, quantity, type }) => (
          <li key={id}>
            up to {quantity} {type}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Instruments;
