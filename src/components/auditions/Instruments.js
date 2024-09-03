const Instruments = ({ instruments }) => {
  return (
    <>
      <p>
        <span className="beCareful text-2xl">Welcome</span> to the Auditions
        page! 2025 auditions will be held for the following positions:
      </p>
      <ul className="list-disc list-inside ml-5">
        {instruments.map((instrument) => (
          <li key={instrument.id}>
            {instrument.quantity} {instrument.type}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Instruments;
